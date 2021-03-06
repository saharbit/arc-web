import React from "react";
import Input from "../../components/Input";
import { SIZE_OPTIONS, FONT_FAMILY_OPTIONS } from "./AvatarGenerator.constants";
import SelectInput from "../../components/SelectInput";

const AvatarSettingsForm = ({
  inputValue,
  setInputValue,
  setRounded,
  currentSize,
  setCurrentSize,
  fontScale,
  setFontScale,
  fontFamily,
  setFontFamily,
}) => {
  return (
    <div className="flex flex-col mb-8">
      <Input
        label="Initials"
        placeholder="John Doe"
        className="mb-2"
        value={inputValue}
        onChange={setInputValue}
        id="initials-input"
      />
      <SelectInput
        label="Avatar size"
        value={currentSize}
        onChange={setCurrentSize}
        options={SIZE_OPTIONS}
        className="w-full"
      />
      <SelectInput
        label="Font family"
        value={fontFamily}
        onChange={setFontFamily}
        options={FONT_FAMILY_OPTIONS}
        className="w-full"
      />
      <div className="flex flex-col mb-2">
        <Input
          value={fontScale}
          onChange={(value) => {
            if (value >= 0 && value <= 1) {
              setFontScale(value);
            }
          }}
          type="number"
          step="0.1"
          max="1"
          min="0.1"
          id="font-scale-input"
          label="Font scale"
        />
      </div>
      <div>
        <input id="rounded-input" type="checkbox" onChange={(e) => setRounded(e.target.checked)} />
        <label htmlFor="rounded-input" className="ml-2 text-white">
          Rounded
        </label>
      </div>
    </div>
  );
};

export default AvatarSettingsForm;
