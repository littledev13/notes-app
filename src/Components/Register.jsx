import { useState } from "react";
import { writeDB, readDB } from "../config/firebase";
import Button from "./Button";
import Input from "./Input";

function Register() {
  const [username, setUser] = useState("");
  const [email, setEmail] = useState("second");
  const [pass, setPass] = useState("");
  const [hidden, setHidden] = useState("hidden");
  return (
    <div className="place-self-center bg-slate-200 w-fit px-10 py-7 rounded-lg shadow-xl">
      <div
        className={
          hidden +
          " inline-flex bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700  items-center w-full"
        }
        role="alert"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="check-circle"
          className="w-4 h-4 mr-2 fill-current"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
          ></path>
        </svg>
        A simple success alert - check it out!
      </div>
      <div className="header">
        <p className="text-center text-2xl mb-5 font-bold">Register</p>
      </div>
      <div className="flex justify-center ">
        <div>
          <Input
            type={"text"}
            id={"floatingnama"}
            label="username"
            minlength={8}
            maxlengt={16}
            onChange={setUser}
          />
          <Input
            type={"email"}
            id={"floatingInput"}
            label="Email Addres"
            onChange={setEmail}
          />
          <Input
            type={"password"}
            id={"floatingPassword"}
            label="Password"
            onChange={setPass}
          />
        </div>
      </div>

      <div className="flex justify-center flex-row gap-10 mt-3">
        <Button
          onClick={() => {
            readDB({ type: "regis", username, email, pass });
          }}
          name={"register"}
          to
        />
      </div>
    </div>
  );
}

export default Register;
