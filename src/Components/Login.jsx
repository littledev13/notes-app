import Button from "./Button";
import Input from "./Input";

function Login() {
  return (
    <div className="place-self-center bg-slate-200 w-fit px-10 py-7 rounded-lg shadow-xl">
      <div className="header">
        <p className="text-center text-2xl mb-5 font-bold">LOGIN</p>
      </div>
      <div class="flex justify-center ">
        <div>
          <Input type={"email"} id={"floatingInput"} label="Email Addres" />
          <Input type={"password"} id={"floatingPassword"} label="Password" />
        </div>
      </div>
      <div className="flex justify-center flex-row gap-10 mt-3">
        <Button name={"login"} />
        <Button name={"register"} />
      </div>
    </div>
  );
}

export default Login;
