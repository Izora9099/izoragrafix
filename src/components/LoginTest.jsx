import { useState } from 'react';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginTest = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const testLogin = async () => {
    try {
      setError('');
      setSuccess('');
      console.log('Attempting login...');
      
      const userCredential = await signInWithEmailAndPassword(
        auth,
        'izoragraphics@gmail.com',
        // Enter the password you set in Firebase here
        'your_password'
      );

      console.log('Login successful:', userCredential.user);
      setSuccess('Login successful!');
      
    } catch (error) {
      console.error('Detailed error:', error);
      setError(error.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login Test</h2>
      <button onClick={testLogin}>Test Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default LoginTest;
