import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reviews: [],
  loading: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
    addReview: (state, action) => {
      state.reviews.push(action.payload);
    },
    updateReview: (state, action) => {
      const index = state.reviews.findIndex(r => r.id === action.payload.id);
      if (index !== -1) {
        state.reviews[index] = action.payload;
      }
    },
    deleteReview: (state, action) => {
      state.reviews = state.reviews.filter(r => r.id !== action.payload);
    },
  },
});

export const { setReviews, addReview, updateReview, deleteReview } = reviewsSlice.actions;
export default reviewsSlice.reducer;
