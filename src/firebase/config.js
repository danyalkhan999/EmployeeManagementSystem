// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeIojFoJdKfNs5-cBgM8Dn2FOS0PiNn9Q",
  authDomain: "employee-management-syst-5a377.firebaseapp.com",
  projectId: "employee-management-syst-5a377",
  storageBucket: "employee-management-syst-5a377.firebasestorage.app",
  messagingSenderId: "495882706422",
  appId: "1:495882706422:web:4920a777d721e43e3a7bd7",
  measurementId: "G-ZSVFDR8BDK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
