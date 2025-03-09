import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  orderBy,
  where,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { cloudinaryService } from './cloudinaryService';

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
      // Upload image to Cloudinary
      const imageResult = await cloudinaryService.uploadImage(imageFile, 'gallery');

      // Add gallery item with image data to Firestore
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...imageData,
        image: imageResult.url,
        imagePublicId: imageResult.publicId,
        imageDetails: {
          width: imageResult.width,
          height: imageResult.height,
          format: imageResult.format
        },
        createdAt: serverTimestamp()
      });

      return {
        id: docRef.id,
        ...imageData,
        image: imageResult.url,
        imagePublicId: imageResult.publicId,
        imageDetails: {
          width: imageResult.width,
          height: imageResult.height,
          format: imageResult.format
        }
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
        // Delete old image from Cloudinary if exists
        if (imageData.imagePublicId) {
          await cloudinaryService.deleteImage(imageData.imagePublicId)
            .catch(error => {
              console.warn('Error deleting old image:', error);
            });
        }

        // Upload new image
        const imageResult = await cloudinaryService.uploadImage(imageFile, 'gallery');

        updateData = {
          ...updateData,
          image: imageResult.url,
          imagePublicId: imageResult.publicId,
          imageDetails: {
            width: imageResult.width,
            height: imageResult.height,
            format: imageResult.format
          }
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
  deleteImage: async (id, imagePublicId) => {
    try {
      // Delete image from Cloudinary
      if (imagePublicId) {
        await cloudinaryService.deleteImage(imagePublicId)
          .catch(error => {
            console.warn('Error deleting image:', error);
          });
      }

      // Delete document from Firestore
      await deleteDoc(doc(db, COLLECTION_NAME, id));
      return id;
    } catch (error) {
      console.error('Error deleting gallery image:', error);
      throw error;
    }
  }
};
