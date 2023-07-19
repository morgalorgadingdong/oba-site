// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOpL-4PLzD1i2-zNomj1lynedPJsWu4l0",
  authDomain: "oregon-bicycle-adventures.firebaseapp.com",
  projectId: "oregon-bicycle-adventures",
  storageBucket: "oregon-bicycle-adventures.appspot.com",
  messagingSenderId: "890512380529",
  appId: "1:890512380529:web:da3c605ae83ad3677a81d0",
  measurementId: "G-7H0XTMDR2M"
};

// Initialize Firebase
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
// export const auth = getAuth();
// export const storage = getStorage();