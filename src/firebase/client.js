import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBnU2Tm8go8mHRmur4eiN52QvhuRrFVV8E",
  authDomain: "proyectoreactcodersr.firebaseapp.com",
  projectId: "proyectoreactcodersr",
  storageBucket: "proyectoreactcodersr.appspot.com",
  messagingSenderId: "937998158099",
  appId: "1:937998158099:web:37099bfd16af4584a7b2e6"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);