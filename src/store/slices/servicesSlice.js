import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: {
    graphicDesign: [
      { id: 1, name: 'Flyers', description: 'Professional flyer design for events and promotions' },
      { id: 2, name: 'Posters', description: 'Eye-catching poster designs for any occasion' },
      { id: 3, name: 'Banners', description: 'Custom banner designs for indoor and outdoor use' },
      { id: 4, name: 'Digital Art', description: 'Creative digital artwork and illustrations' },
    ],
    techSolutions: [
      { id: 1, name: 'Software Maintenance', description: 'Regular software updates and maintenance' },
      { id: 2, name: 'OS Installation', description: 'Operating system installation and setup' },
      { id: 3, name: 'Hardware Sales', description: 'Quality laptops, routers, and tech equipment' },
    ],
  },
  loading: false,
  error: null,
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
    },
    addService: (state, action) => {
      const { category, service } = action.payload;
      state.services[category].push(service);
    },
    updateService: (state, action) => {
      const { category, service } = action.payload;
      const index = state.services[category].findIndex(s => s.id === service.id);
      if (index !== -1) {
        state.services[category][index] = service;
      }
    },
    deleteService: (state, action) => {
      const { category, id } = action.payload;
      state.services[category] = state.services[category].filter(s => s.id !== id);
    },
  },
});

export const { setServices, addService, updateService, deleteService } = servicesSlice.actions;
export default servicesSlice.reducer;
