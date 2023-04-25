// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzd5DWujVeEgfYVskidDoUwaYIWnU6Kuw",
  authDomain: "the-news-dragon-client-e7c7b.firebaseapp.com",
  projectId: "the-news-dragon-client-e7c7b",
  storageBucket: "the-news-dragon-client-e7c7b.appspot.com",
  messagingSenderId: "504832036166",
  appId: "1:504832036166:web:7daad3fc6113a675f9e947",
  measurementId: "G-2W8BNVLD4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;