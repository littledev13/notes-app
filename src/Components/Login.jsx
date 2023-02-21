import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import { readDB } from "../config/firebase.js";
import { login } from "../Store/counter/counter";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function Login() {
  const [username, setUser] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  let user = useSelector((state) => state.counter.username);

  const navigate = useNavigate();
  useEffect(() => {
    // console.log("user :", user);
    if (user) {
      navigate("chats");
    }
  });
  return (
    <div className="place-self-center bg-slate-200 w-fit px-10 py-7 rounded-lg shadow-xl">
      <div className="header">
        <p className="text-center text-2xl mb-5 font-bold uppercase">login</p>
      </div>
      <div className="flex justify-center ">
        <div>
          <Input
            type={"text"}
            id={"floatingInput"}
            label="Username"
            onChange={(a) => {
              // console.log(a);
              setUser(a);
            }}
          />
          <Input
            type={"password"}
            id={"floatingPassword"}
            label="Password"
            onChange={(a) => {
              setPass(a);
            }}
          />
        </div>
      </div>
      <div className="flex justify-center flex-row gap-10 mt-3">
        <Button
          name={"login"}
          onClick={async () => {
            const a = await readDB({
              type: "login",
              username,
              pass,
            });
            if (a) {
              dispatch(login(a));
            }
          }}
          to="/"
        />
        <Button name={"register"} to="/regis" />
      </div>
    </div>
  );
}

export default Login;
