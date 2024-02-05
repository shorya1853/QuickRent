// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1UsENeFNYWtLS2rizbS76H1PkwLsCCZY",
  authDomain: "quickrent-a3107.firebaseapp.com",
  projectId: "quickrent-a3107",
  storageBucket: "quickrent-a3107.appspot.com",
  messagingSenderId: "862090483024",
  appId: "1:862090483024:web:9f0edcdf2d33b78a290855",
  measurementId: "G-0E08VS30BM"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);