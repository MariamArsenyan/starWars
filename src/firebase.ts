import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAzqkuip6aP7Wi7nmYqn7spjIzRZi7mVYg',
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_APP_FIREBASE_DATABASE_URL || '',
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID || ''
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

