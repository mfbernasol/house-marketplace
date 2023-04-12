import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyALAKXsLS9D479KYA68BoQ0LSIzYyB8lWc',
  authDomain: 'house-marketplace-app-59ec7.firebaseapp.com',
  projectId: 'house-marketplace-app-59ec7',
  storageBucket: 'house-marketplace-app-59ec7.appspot.com',
  messagingSenderId: '157139236614',
  appId: '1:157139236614:web:a0c2fa050843403d9ad087',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
