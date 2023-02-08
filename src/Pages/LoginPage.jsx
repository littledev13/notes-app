import AddNote from "../Components/AddNote";
import Login from "../Components/Login";
import Logout from "../Components/Logout";
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
      {/* // ! PR */}
      <div
        id="notelist"
        className="h-full  bg-rose-50 gap-y-4  justify-around  text-justify"
      >
        <Note />
        <Note />
        {/* <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note /> */}
        <Note />
        <Note />
        <AddNote />
      </div>
    </div>
  );
}

export default LoginPage;
