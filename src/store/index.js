import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './slices/servicesSlice';
import reviewsReducer from './slices/reviewsSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    services: servicesReducer,
    reviews: reviewsReducer,
    auth: authReducer,
  },
});

export default store;
