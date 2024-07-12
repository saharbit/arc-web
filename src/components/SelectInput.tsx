import Select from "react-select";
import Label from "./Label";

type SelectInputProps = {
  label: string;
  value: any;
  onChange: (e: any) => void;
  options: any;
  className?: string;
};

const SelectInput = ({ label, value, onChange, options, className }: SelectInputProps) => {
  return (
    <div className="flex flex-col">
      <Label>{label}</Label>
      <Select value={value} onChange={onChange} options={options} className={className} />
    </div>
  );
};

export default SelectInput;
