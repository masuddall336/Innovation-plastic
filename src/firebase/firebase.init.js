// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeR25zq5GJTfb9T2Us3uNx2KWAD18ux-k",
  authDomain: "innovation-plastic.firebaseapp.com",
  projectId: "innovation-plastic",
  storageBucket: "innovation-plastic.firebasestorage.app",
  messagingSenderId: "598495772290",
  appId: "1:598495772290:web:09ba8cd6fc3a37a9163e9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);