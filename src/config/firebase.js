// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb12_wumYUV95wmc4GyhpY7cMmb8imzFU",
  authDomain: "task-notes-4055b.firebaseapp.com",
  databaseURL: "https://task-notes-4055b-default-rtdb.firebaseio.com",
  projectId: "task-notes-4055b",
  storageBucket: "task-notes-4055b.appspot.com",
  messagingSenderId: "418117400036",
  appId: "1:418117400036:web:f93e063f1ddd5b172fc3f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
