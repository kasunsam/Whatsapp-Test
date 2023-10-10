import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDfRkFbyD11c0YFpovKQpEFYcdmdWwoN7s',
  authDomain: 'whatsapp-test-a3217.firebaseapp.com',
  projectId: 'whatsapp-test-a3217',
  storageBucket: 'whatsapp-test-a3217.appspot.com',
  messagingSenderId: '18386094744',
  appId: '1:18386094744:web:5f7760382bda19dc621eed',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
