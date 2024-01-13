import Select from "react-select";

const SelectInput = ({ label, value, onChange, options, className }) => {
  return (
    <div className="flex flex-col mb-2">
      <label className="text-white text-xs uppercase mb-1">{label}</label>
      <Select value={value} onChange={onChange} options={options} className={className} />
    </div>
  );
};

export default SelectInput;
