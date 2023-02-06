import Login from "../Components/Login";
import Register from "../Components/Register";

function LoginPage() {
  return (
    <div
      id="Login-Page"
      className="w-[85%] h-[84%] bg bg-white px-5 py-3 rounded-md shadow-md grid"
    >
      <Login />
      {/* <Register /> */}
    </div>
  );
}

export default LoginPage;
