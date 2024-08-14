// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { 
  apiKey: "AIzaSyDJcPeGPavNZha3kv1mYFg-UQdiP2xOLK8",
  authDomain: "distribuidora-bebidas-bd419.firebaseapp.com",
  databaseURL: "https://distribuidora-bebidas-bd419-default-rtdb.firebaseio.com",
  projectId: "distribuidora-bebidas-bd419",
  storageBucket: "distribuidora-bebidas-bd419.appspot.com",
  messagingSenderId: "364925510684",
  appId: "1:364925510684:web:e764d88679d87066e72bd9",
  measurementId: "G-Q19RYFRHD6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);