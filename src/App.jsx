import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <div className="App transition-all duration-150 w-screen h-screen bg-slate-300 grid place-items-center font-Poppins">
      <h1
        id="title"
        className="absolute top-2 text-center font-Itim text-3xl underline underline-offset-4 font-bold text"
      >
        Notes LD
      </h1>
      <LoginPage />
    </div>
  );
}

export default App;
