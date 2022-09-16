// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB8iUcjA9gNynTteR3E3DtYnSoofGlOgU",
  authDomain: "community-446c4.firebaseapp.com",
  projectId: "community-446c4",
  storageBucket: "community-446c4.appspot.com",
  messagingSenderId: "613829516239",
  appId: "1:613829516239:web:341f112a0f2e57bc9b50ba",
  measurementId: "G-F4M19LENPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;