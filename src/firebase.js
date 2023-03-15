// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOuRD3DYb7umpIph-bszGTgqHrwbGlrXI",
  authDomain: "food-app-564d0.firebaseapp.com",
  projectId: "food-app-564d0",
  storageBucket: "food-app-564d0.appspot.com",
  messagingSenderId: "56075213861",
  appId: "1:56075213861:web:84b77cc802157f36cfb3cc",
  measurementId: "G-Y4EMD3KCQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();