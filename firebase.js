// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA85tQf-rIZseLOmi0rSD8wNzJz4STCNzc",
  authDomain: "myapp12-df0c0.firebaseapp.com",
  projectId: "myapp12-df0c0",
  storageBucket: "myapp12-df0c0.firebasestorage.app",
  messagingSenderId: "588994500099",
  appId: "1:588994500099:web:8bf2ab13198f9bbea3e036",
  measurementId: "G-9K6WXV0VL9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
