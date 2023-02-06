import Login from "../Components/Login";
import Note from "../Components/Note";
import Register from "../Components/Register";

function LoginPage() {
  return (
    <div
      id="Login-Page"
      className="w-[85%] h-[84%] bg bg-white px-5 py-3 rounded-md shadow-md grid overflow-x-auto "
    >
      {/* <Login /> */}
      {/* <Register /> */}
      <div className="h-full grid grid-cols-4 grid-rows-4 gap-5  place-items-center  bg-rose-50">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </div>
  );
}

export default LoginPage;
