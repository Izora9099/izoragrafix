export const cloudinaryConfig = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
  apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY
};

// Helper function to generate Cloudinary URL with transformations
export const getOptimizedImageUrl = (publicId, { width = 800, quality = 'auto', format = 'auto' } = {}) => {
  const baseUrl = `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload`;
  const transformations = `w_${width},q_${quality},f_${format}`;
  return `${baseUrl}/${transformations}/${publicId}`;
};
