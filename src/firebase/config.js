// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtBIYEJ_B1JR2r-K87liI3gHG5alFH6SA",
  authDomain: "react-coder-1bf66.firebaseapp.com",
  projectId: "react-coder-1bf66",
  storageBucket: "react-coder-1bf66.appspot.com",
  messagingSenderId: "866428331613",
  appId: "1:866428331613:web:ee5303a552a42f24370fb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);