// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4RvH23WYnuz7hjNbmxxCWEh6BYoEtiU4",
  authDomain: "car-toys-930ac.firebaseapp.com",
  projectId: "car-toys-930ac",
  storageBucket: "car-toys-930ac.appspot.com",
  messagingSenderId: "188575392162",
  appId: "1:188575392162:web:24174391b2063a187792fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app