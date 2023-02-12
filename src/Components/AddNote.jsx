import React from "react";
// import { CRUD } from "../config/CRUD";
import { writeDB } from "../config/firebase";

function AddNote() {
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
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );

  return (
    <div
      id=""
      className="px-3 py-2  bg-rose-200 rounded shadow border flex-col  flex justify-between"
    >
      <div className="top  h-full">
        <input
          id="input-title-note"
          className=" font-bold  w-full rounded bg-transparent outline-none focus-visible:outline-none text-sm box-border border-black border-b-2 "
          maxLength={20}
        />
        <textarea
          className="resize-none w-full h-full bg-transparent outline-none focus-visible:outline-none text-sm box-border "
          placeholder="Type to add note..."
          name="note"
          maxLength={175}
        />
      </div>
      <div className="bot flex flex-row justify-between items-center ">
        <p className="text-sm text-slate-600">28/12/2023</p>
        <button
          className="p-1 rounded-full self-end justify-self-end hover:bg-emerald-500 hover:text-white duration-300"
          onClick={() => {
            writeDB({
              add: {
                satu: "satu",
              },
            });
          }}
        >
          {svg}
        </button>
      </div>
    </div>
  );
}

export default AddNote;
