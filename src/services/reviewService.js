import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../config/firebase';

const COLLECTION_NAME = 'reviews';

export const reviewService = {
  // Get all reviews
  getAllReviews: async () => {
    try {
      const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting reviews:', error);
      throw error;
    }
  },

  // Add a new review
  addReview: async (reviewData) => {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...reviewData,
        createdAt: serverTimestamp()
      });

      return {
        id: docRef.id,
        ...reviewData
      };
    } catch (error) {
      console.error('Error adding review:', error);
      throw error;
    }
  },

  // Update an existing review
  updateReview: async (id, reviewData) => {
    try {
      const reviewRef = doc(db, COLLECTION_NAME, id);
      const updateData = {
        ...reviewData,
        updatedAt: serverTimestamp()
      };

      await updateDoc(reviewRef, updateData);
      return {
        id,
        ...updateData
      };
    } catch (error) {
      console.error('Error updating review:', error);
      throw error;
    }
  },

  // Delete a review
  deleteReview: async (id) => {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, id));
      return id;
    } catch (error) {
      console.error('Error deleting review:', error);
      throw error;
    }
  }
};
