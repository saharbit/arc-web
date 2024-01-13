import { InputHTMLAttributes } from "react";

type Props<T> = {
  value: T;
  onChange: (value: T) => void;
  id: string;
  label: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

const Input = ({ value, onChange, className, id, label, ...props }: Props<any>) => {
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
