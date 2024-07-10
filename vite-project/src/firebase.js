import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDSnq73Ia_d6LfvebTmXsiNJzNSHKoX-UA",
  authDomain: "react-ad0f5.firebaseapp.com",
  projectId: "react-ad0f5",
  storageBucket: "react-ad0f5.appspot.com",
  messagingSenderId: "898722038063",
  appId: "1:898722038063:web:477b8cba8913fc598321da",
  measurementId: "G-Z59Z0KP81D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const db = getFirestore(app);

export { auth, db };
export default app;
