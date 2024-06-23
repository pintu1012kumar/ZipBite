// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt7db7rZ8uakV3c6UOuNaonXuXWhxxa2Y",
  authDomain: "zip-bite.firebaseapp.com",
  projectId: "zip-bite",
  storageBucket: "zip-bite.appspot.com",
  messagingSenderId: "952797184259",
  appId: "1:952797184259:web:cb5ba829cbee4c54d82936",
  measurementId: "G-FSXH2T3GV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);