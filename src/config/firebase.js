// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  push,
  onValue,
} from "firebase/database";
// import { useDispatch } from "react-redux";

// Your web app's Firebase configuration
// ! Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAb12_wumYUV95wmc4GyhpY7cMmb8imzFU",
  authDomain: "task-notes-4055b.firebaseapp.com",
  databaseURL: "https://task-notes-4055b-default-rtdb.firebaseio.com",
  projectId: "task-notes-4055b",
  storageBucket: "task-notes-4055b.appspot.com",
  messagingSenderId: "418117400036",
  appId: "1:418117400036:web:f93e063f1ddd5b172fc3f1",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const dbRef = ref(db);
const tgl = new Date();

//  *** mentok di read, besok coba push dulu dengan username
//  ***
//  ***
//  ***
//  ***

//  ! CRUD
const readDB = async ({ ...read }) => {
  let type;
  let data;
  if (read.type === "login") {
    type = "users/";
    data = get(child(dbRef, type + read.username))
      .then((snapshot) => {
        if (snapshot.exists()) {
          if (snapshot.val().pass === read.pass) {
            return snapshot.val();
          } else {
            alert("Maaf, Password anda salah");
          }
        } else {
          return false;
        }
      })
      .catch((error) => {
        console.error("firebase err: ", error);
      });
  }
  if (read.type === "regis") {
    type = "users/";
    data = onValue(
      ref(db, type),
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          if (childKey === read.username) {
            alert("username sudah ada");
          }
          if (childKey != read.username) {
            writeDB({
              type: "regis",
              username: read.username,
              email: read.email,
              pass: read.pass,
            });
            alert("Berhasil, Silakan Login!!");
          }
        });
      },
      {
        onlyOnce: true,
      }
    );
  }
  if (read.type === "load") {
    type = "chats/";
  }
  return data;

  // console.log(await data);
  //
  //
  // ? Login
  // TODO harus ada alert untuk password salah atau username tidak terdaftar
  // ? Login
  // ? Load Notes
  // TODO otomatis munculin note
  // ? Load Notes
};
const writeDB = async ({ ...write }) => {
  // ? Regis
  // TODO Harus cek username lain
  // TODO Harus cek email lain
  // TODO Harus isi username, email, pass
  // TODO Langsung ke notelist
  if (write.type == "regis") {
    set(ref(db, "users/" + write.username), {
      username: write.username,
      email: write.email,
      pass: write.pass,
    });
  }

  // ? Regis
  //
  //
  // ? Save Notes
  // TODO Harus mengisi title dan note
  // TODO auto generate tanggal
  // TODO harus menyimpan key di id note
  // ? Save Notes
};

const delNote = (params) => {
  // ? Delete note
};

export { writeDB, readDB, delNote };
