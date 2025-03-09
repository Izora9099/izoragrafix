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
      // Upload image to Cloudinary
      const imageResult = await cloudinaryService.uploadImage(imageFile, 'portfolio');

      // Add portfolio item with image data to Firestore
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...itemData,
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
        ...itemData,
        image: imageResult.url,
        imagePublicId: imageResult.publicId,
        imageDetails: {
          width: imageResult.width,
          height: imageResult.height,
          format: imageResult.format
        }
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
        // Delete old image from Cloudinary if exists
        if (itemData.imagePublicId) {
          await cloudinaryService.deleteImage(itemData.imagePublicId)
            .catch(error => {
              console.warn('Error deleting old image:', error);
            });
        }

        // Upload new image
        const imageResult = await cloudinaryService.uploadImage(imageFile, 'portfolio');

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
  deleteItem: async (id, imagePublicId) => {
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
      console.error('Error deleting portfolio item:', error);
      throw error;
    }
  }
};
