import React from "react";

function Input({ type, id, maxlengt, label, onChange, minlength, mode }) {
  return (
    <div className="form-floating mb-3 xl:w-96">
      <input
        maxLength={maxlengt || 25}
        minLength={minlength || 4}
        type={type || "email"}
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none invalid:border-rose-500"
        id={id || "floatingInput"}
        placeholder="name@example.com"
        onChange={(a) => {
          onChange(a.target.value);
        }}
        inputMode={mode}
        required
      />

      <label htmlFor={id || "floatingInput"} className="text-gray-700">
        {label || "Need Label"}
      </label>
    </div>
  );
}

export default Input;
