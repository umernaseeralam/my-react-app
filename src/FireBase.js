// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9Y1Qm2MMwM6ujNAbAIG3Fjeu1ww0baIQ",
  authDomain: "socialconnect-7f102.firebaseapp.com",
  projectId: "socialconnect-7f102",
  storageBucket: "socialconnect-7f102.appspot.com",
  messagingSenderId: "528556223237",
  appId: "1:528556223237:web:debfd30a16fac98fb5656c",
  measurementId: "G-QY9VH9J2CD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);