import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
