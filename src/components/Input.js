import React from "react";

const Input = ({ value, onChange, className, id, label, ...props }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="text-white text-xs uppercase mb-1">
        {label}
      </label>
      <input
        id={id}
        className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        {...props}
      />
    </div>
  );
};

export default Input;
