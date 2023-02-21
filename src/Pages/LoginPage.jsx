import { Outlet } from "react-router-dom";

function LoginPage() {
  return (
    <div
      id="Login-Page"
      className="w-[85%] h-[84%] bg bg-white px-5 py-3 rounded-md shadow-md grid  absolute"
    >
      <Outlet />
    </div>
  );
}

export default LoginPage;
