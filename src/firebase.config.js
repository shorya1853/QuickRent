// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeq2qZsQ7VAN9592BpHSWytJD9er4FbUI",
  authDomain: "web-app-test-aed01.firebaseapp.com",
  projectId: "web-app-test-aed01",
  storageBucket: "web-app-test-aed01.appspot.com",
  messagingSenderId: "601816964471",
  appId: "1:601816964471:web:1c746cbaa65e996df51572",
  measurementId: "G-2DHYSK06B8"
};

const app = initializeApp(config);

// Initialize Firebase
export const db = getFirestore(app);