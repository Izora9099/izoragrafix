import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  where
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../config/firebase';

const COLLECTION_NAME = 'gallery';

export const galleryService = {
  // Get all gallery items
  getAllImages: async () => {
    try {
      const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting gallery images:', error);
      throw error;
    }
  },

  // Get images by category
  getImagesByCategory: async (category) => {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('category', '==', category),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting gallery images by category:', error);
      throw error;
    }
  },

  // Add a new gallery image
  addImage: async (imageData, imageFile) => {
    try {
      // Upload image
      const imageRef = ref(storage, `gallery/${Date.now()}_${imageFile.name}`);
      await uploadBytes(imageRef, imageFile);
      const imageUrl = await getDownloadURL(imageRef);

      // Add gallery item with image URL
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...imageData,
        image: imageUrl,
        imagePath: imageRef.fullPath,
        createdAt: serverTimestamp()
      });

      return {
        id: docRef.id,
        ...imageData,
        image: imageUrl
      };
    } catch (error) {
      console.error('Error adding gallery image:', error);
      throw error;
    }
  },

  // Update an existing gallery image
  updateImage: async (id, imageData, imageFile = null) => {
    try {
      const imageRef = doc(db, COLLECTION_NAME, id);
      let updateData = {
        ...imageData,
        updatedAt: serverTimestamp()
      };

      // If new image is provided, upload it and update URL
      if (imageFile) {
        // Delete old image if exists
        if (imageData.imagePath) {
          const oldImageRef = ref(storage, imageData.imagePath);
          await deleteObject(oldImageRef).catch(error => {
            console.warn('Error deleting old image:', error);
          });
        }

        // Upload new image
        const newImageRef = ref(storage, `gallery/${Date.now()}_${imageFile.name}`);
        await uploadBytes(newImageRef, imageFile);
        const imageUrl = await getDownloadURL(newImageRef);

        updateData = {
          ...updateData,
          image: imageUrl,
          imagePath: newImageRef.fullPath
        };
      }

      await updateDoc(imageRef, updateData);
      return {
        id,
        ...updateData
      };
    } catch (error) {
      console.error('Error updating gallery image:', error);
      throw error;
    }
  },

  // Delete a gallery image
  deleteImage: async (id, imagePath) => {
    try {
      // Delete image from storage
      if (imagePath) {
        const imageRef = ref(storage, imagePath);
        await deleteObject(imageRef).catch(error => {
          console.warn('Error deleting image:', error);
        });
      }

      // Delete document
      await deleteDoc(doc(db, COLLECTION_NAME, id));
      return id;
    } catch (error) {
      console.error('Error deleting gallery image:', error);
      throw error;
    }
  }
};
