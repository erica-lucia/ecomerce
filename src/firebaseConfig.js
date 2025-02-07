import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWNI_HdIrcyhhOMHLzhNEpnoePc0_CeT0",
  authDomain: "ecomerce-a8703.firebaseapp.com",
  projectId: "ecomerce-a8703",
  storageBucket: "ecomerce-a8703.firebasestorage.app",
  messagingSenderId: "290803158688",
  appId: "1:290803158688:web:e118a90ae40fc6639743c5"
};
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
