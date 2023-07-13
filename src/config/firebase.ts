// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp  } from 'firebase/app';
import { getAuth, GoogleAuthProvider, Auth } from 'firebase/auth';
import { getFirestore, Firestore  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: object = {
  apiKey: 'AIzaSyAPypXWWsmB2Hd91HVzdvoNiWdPPc4pzsc',
  authDomain: 'foodclicker-35667.firebaseapp.com',
  projectId: 'foodclicker-35667',
  storageBucket: 'foodclicker-35667.appspot.com',
  messagingSenderId: '61955772979',
  appId: '1:61955772979:web:7a3e46cb3fd46412568946',
  measurementId: 'G-W86K57SP9X',
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();
export const db: Firestore = getFirestore(app);
