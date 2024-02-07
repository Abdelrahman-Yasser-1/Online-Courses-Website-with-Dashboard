// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbkJ0rRXadJh5Bwf3mBn_sFhMA3jzThyw",
  authDomain: "online-courses-82791.firebaseapp.com",
  projectId: "online-courses-82791",
  storageBucket: "online-courses-82791.appspot.com",
  messagingSenderId: "852392875421",
  appId: "1:852392875421:web:7fd54f544caec6622c0b74",
  measurementId: "G-K0RJ4JQ9QM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const imageDB = getStorage(app);
