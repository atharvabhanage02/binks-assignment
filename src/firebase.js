// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmMre3QZkkdVG3b8acFGihEK44WYNoWKk",
  authDomain: "assignment-social-auth.firebaseapp.com",
  projectId: "assignment-social-auth",
  storageBucket: "assignment-social-auth.appspot.com",
  messagingSenderId: "204704655006",
  appId: "1:204704655006:web:8c545017f0509638037d8f",
  measurementId: "G-3NK1J00MFS",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
