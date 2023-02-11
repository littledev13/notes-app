import { getDatabase, ref, set } from "firebase/database";
// import app from "./firebase";

const CRUD = () => {
  const db = getDatabase();
  set(ref(db, "users/"), {
    username: "name",
    email: "email",
    profile_picture: "imageUrl",
  });
  alert("work ");
};

export { CRUD };
