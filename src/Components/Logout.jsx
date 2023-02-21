import { useDispatch } from "react-redux";
import { logout } from "../Store/counter/counter";
function Logout() {
  const dispatch = useDispatch();
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
      />
    </svg>
  );

  return (
    <div
      className="cursor-pointer absolute bottom-4 right-7 scale-150 hover:text-white hover:bg-rose-500 p-1 rounded-lg"
      onClick={() => {
        dispatch(logout());
      }}
    >
      {svg}
    </div>
  );
}

export default Logout;
