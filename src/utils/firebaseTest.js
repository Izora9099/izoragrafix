import { auth, analytics } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { logEvent } from 'firebase/analytics';

export const testFirebaseConfig = async () => {
  console.log('Testing Firebase configuration...');

  // Test Analytics (only in production)
  try {
    const analyticsInstance = await analytics;
    if (analyticsInstance) {
      logEvent(analyticsInstance, 'test_event');
      console.log('✅ Firebase Analytics initialized successfully');
    } else {
      console.log('ℹ️ Firebase Analytics not available in development mode');
    }
  } catch (error) {
    console.error('❌ Firebase Analytics error:', error);
  }

  // Test Authentication
  try {
    const email = 'izoragraphics@gmail.com';
    console.log('Attempting login with:', email);
    
    // Note: Replace 'your-password' with your actual Firebase password
    const userCredential = await signInWithEmailAndPassword(auth, email, 'your-password');
    console.log('✅ Firebase Authentication successful:', userCredential.user.email);
    return true;
  } catch (error) {
    console.error('❌ Firebase Authentication error:', error.code, error.message);
    return false;
  }
};
