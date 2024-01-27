import { InputHTMLAttributes } from "react";
import Label from "./Label";

type Props<T> = {
  value: T;
  onChange: (value: T) => void;
  id: string;
  label: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

const Input = ({ value, onChange, className, id, label, ...props }: Props<any>) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <Label htmlFor={id}>{label}</Label>
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
