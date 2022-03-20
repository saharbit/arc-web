import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-black hover:bg-gray-900 text-white font-bold py-4 px-4 rounded-full focus:outline-none focus:shadow-outline transition-all duration-200"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
