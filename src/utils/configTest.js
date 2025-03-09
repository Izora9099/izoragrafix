import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { cloudinaryService } from '../services/cloudinaryService';

export const testConfigurations = async () => {
  console.log('Testing configurations...');

  // Test Firebase Authentication
  try {
    await signInWithEmailAndPassword(auth, 'izoragraphics@gmail.com', 'your_password');
    console.log('✅ Firebase Authentication is configured correctly');
  } catch (error) {
    console.error('❌ Firebase Authentication error:', error.message);
  }

  // Test Cloudinary Configuration
  try {
    const testUrl = cloudinaryService.getImageUrl('test');
    console.log('Cloudinary URL generated:', testUrl);
    if (testUrl.includes('deqhtn9hd')) {
      console.log('✅ Cloudinary configuration is correct');
    } else {
      console.log('❌ Cloudinary configuration might have issues');
    }
  } catch (error) {
    console.error('❌ Cloudinary configuration error:', error);
  }
};
