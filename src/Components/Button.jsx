import { Link } from "react-router-dom";
export default function Button({ name, onClick, to }) {
  return (
    <div className="flex space-x-2 justify-center">
      <Link
        type="button"
        className="inline-block px-7 py-4 bg-blue-600 text-white font-medium  leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={onClick}
        to={to}
      >
        {name}
      </Link>
    </div>
  );
}
