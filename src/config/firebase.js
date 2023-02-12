// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  push,
  get,
  onValue,
  query,
  equalTo,
  orderByChild,
  child,
  orderByValue,
  limitToLast,
} from "firebase/database";

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
const tgl = new Date();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

const writeDB = ({ ...write }) => {
  if (write.regis) {
    const user = write.regis;
    // set(push(ref(db, "users")), {
    //   username: user.username,
    //   email: user.email,
    //   password: user.password,
    //   registerAt: tgl.toLocaleDateString(),
    // });

    console.log("users this");
  } else {
    alert("wrong param");
  }
};

const readDB = (params) => {
  if (!params) {
    return alert("not params");
  }
  onValue(
    ref(db, `${params}`),
    (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        if (childData.username == "aldo") {
          console.log(childData);
          {
          }
        }
      });
    },
    {
      onlyOnce: true,
    }
  );
};

export { writeDB, readDB };
