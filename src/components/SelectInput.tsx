import Select from "react-select";

type SelectInputProps = {
  label: string;
  value: any;
  onChange: (e: any) => void;
  options: any;
  className?: string;
};

const SelectInput = ({ label, value, onChange, options, className }: SelectInputProps) => {
  return (
    <div className="flex flex-col mb-2">
      <label className="text-white text-xs uppercase mb-1">{label}</label>
      <Select value={value} onChange={onChange} options={options} className={className} />
    </div>
  );
};

export default SelectInput;
