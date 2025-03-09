import { cloudinaryConfig, getOptimizedImageUrl } from '../config/cloudinary';

// Helper function to generate signature for secure deletion
const generateSignature = async (publicId, timestamp) => {
  // Note: For security, signature generation should be done on the server side
  // This is a placeholder that should be replaced with a server API call
  const response = await fetch('/api/cloudinary/signature', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      publicId,
      timestamp
    })
  });
  const data = await response.json();
  return data.signature;
};

export const cloudinaryService = {
  uploadImage: async (file, folder = 'general') => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', cloudinaryConfig.uploadPreset);
      formData.append('folder', folder);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Image upload failed');
      }

      const data = await response.json();
      return {
        publicId: data.public_id,
        url: getOptimizedImageUrl(data.public_id),
        secureUrl: data.secure_url,
        format: data.format,
        width: data.width,
        height: data.height
      };
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  },

  deleteImage: async (publicId) => {
    try {
      const timestamp = Math.round((new Date()).getTime() / 1000);
      const signature = await generateSignature(publicId, timestamp);

      const formData = new FormData();
      formData.append('public_id', publicId);
      formData.append('signature', signature);
      formData.append('api_key', cloudinaryConfig.apiKey);
      formData.append('timestamp', timestamp);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/destroy`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Image deletion failed');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error deleting image:', error);
      throw error;
    }
  },

  getImageUrl: (publicId, options) => {
    return getOptimizedImageUrl(publicId, options);
  }
};
