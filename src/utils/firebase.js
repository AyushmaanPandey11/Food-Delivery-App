// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYTby2e9qa5r-ZKOEVe8uFyAG-6C0NU6U",
  authDomain: "food-delivery-app-1e164.firebaseapp.com",
  projectId: "food-delivery-app-1e164",
  storageBucket: "food-delivery-app-1e164.appspot.com",
  messagingSenderId: "747776534688",
  appId: "1:747776534688:web:624be7a1f2479ffeaac1c5",
  measurementId: "G-7YBBL98DNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);