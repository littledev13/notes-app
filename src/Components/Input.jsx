import React from "react";

function Input({ type, id, maxlengt, label }) {
  return (
    <div class="form-floating mb-3 xl:w-96">
      <input
        maxLength={maxlengt || 25}
        type={type || "email"}
        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id={id || "floatingInput"}
        placeholder="name@example.com"
      />

      <label for={id || "floatingInput"} class="text-gray-700">
        {label || "Need Label"}
      </label>
    </div>
  );
}

export default Input;
