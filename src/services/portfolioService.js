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

const COLLECTION_NAME = 'portfolio';

export const portfolioService = {
  // Get all portfolio items
  getAllItems: async () => {
    try {
      const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting portfolio items:', error);
      throw error;
    }
  },

  // Get portfolio items by category
  getItemsByCategory: async (category) => {
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
      console.error('Error getting portfolio items by category:', error);
      throw error;
    }
  },

  // Add a new portfolio item with image upload
  addItem: async (itemData, imageFile) => {
    try {
      // Upload image first
      const imageRef = ref(storage, `portfolio/${Date.now()}_${imageFile.name}`);
      await uploadBytes(imageRef, imageFile);
      const imageUrl = await getDownloadURL(imageRef);

      // Add portfolio item with image URL
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...itemData,
        image: imageUrl,
        imagePath: imageRef.fullPath,
        createdAt: serverTimestamp()
      });

      return {
        id: docRef.id,
        ...itemData,
        image: imageUrl
      };
    } catch (error) {
      console.error('Error adding portfolio item:', error);
      throw error;
    }
  },

  // Update an existing portfolio item
  updateItem: async (id, itemData, imageFile = null) => {
    try {
      const itemRef = doc(db, COLLECTION_NAME, id);
      let updateData = {
        ...itemData,
        updatedAt: serverTimestamp()
      };

      // If new image is provided, upload it and update URL
      if (imageFile) {
        // Delete old image if exists
        if (itemData.imagePath) {
          const oldImageRef = ref(storage, itemData.imagePath);
          await deleteObject(oldImageRef).catch(error => {
            console.warn('Error deleting old image:', error);
          });
        }

        // Upload new image
        const imageRef = ref(storage, `portfolio/${Date.now()}_${imageFile.name}`);
        await uploadBytes(imageRef, imageFile);
        const imageUrl = await getDownloadURL(imageRef);

        updateData = {
          ...updateData,
          image: imageUrl,
          imagePath: imageRef.fullPath
        };
      }

      await updateDoc(itemRef, updateData);
      return {
        id,
        ...updateData
      };
    } catch (error) {
      console.error('Error updating portfolio item:', error);
      throw error;
    }
  },

  // Delete a portfolio item
  deleteItem: async (id, imagePath) => {
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
      console.error('Error deleting portfolio item:', error);
      throw error;
    }
  }
};
