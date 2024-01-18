import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDY-4RdbDIImtgSmfjkdNJVHbzNVVSD6F0",
  authDomain: "fileupload-a451f.firebaseapp.com",
  projectId: "fileupload-a451f",
  storageBucket: "fileupload-a451f.appspot.com",
  messagingSenderId: "126625357082",
  appId: "1:126625357082:web:5685c45732f6ad2cdee0a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);


