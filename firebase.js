import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfpiFXfhmZTrFs_90AN-snZdAmPBkPolE",
  authDomain: "hinstagram2-51b83.firebaseapp.com",
  projectId: "hinstagram2-51b83",
  storageBucket: "hinstagram2-51b83.appspot.com",
  messagingSenderId: "60427418093",
  appId: "1:60427418093:web:64d8012d5ebf9e437a0fe4",
  measurementId: "G-N7NX6BB0KP"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {db, storage, app}