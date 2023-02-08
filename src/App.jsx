import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Logout from "./Components/Logout";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <div className="App transition-all duration-150 w-screen h-screen bg-slate-300 grid place-items-center font-Poppins">
      <h1
        id="title"
        className="absolute top-1 text-center font-Itim text-3xl underline underline-offset-4 font-bold text hover:cursor-pointer hover:bg-slate-50 px-3 py-2 pb-1 rounded-md"
      >
        Notes LD
      </h1>
      <LoginPage />
      <Logout />
    </div>
  );
}

export default App;
