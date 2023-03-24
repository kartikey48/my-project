// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyD99q5z1AC-yX4zVSc0yanXc7pyAS-RqRc",
  authDomain: "khojanalya.firebaseapp.com",
  projectId: "khojanalya",
  storageBucket: "khojanalya.appspot.com",
  messagingSenderId: "106622369635",
  appId: "1:106622369635:web:343d38ff2a797ce3a79d56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();


