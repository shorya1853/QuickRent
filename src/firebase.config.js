import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyB9udQDqPXLTTZevbQXLnMrUA1AdZdPmIA",
    authDomain: "react-otp-af09e.firebaseapp.com",
    projectId: "react-otp-af09e",
    storageBucket: "react-otp-af09e.appspot.com",
    messagingSenderId: "540415500007",
    appId: "1:540415500007:web:15d2a8be5b11328d354c42",
    measurementId: "G-3RM4GDG033"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app, {
    appVerificationDisabledForTesting: true,
  });

export default auth;