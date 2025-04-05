import { useContext } from "react";
import Input from "../Input";
import { SIZE_OPTIONS, FONT_FAMILY_OPTIONS, COLOR_OPTIONS } from "./consts";
import SelectInput from "../SelectInput";
import { observer } from "mobx-react-lite";
import { AvatarFormContext } from "./AvatarGenerator";
import { TwitterPicker } from "react-color";
import Label from "../Label";

const AvatarSettingsForm = () => {
  const {
    inputValue,
    setInputValue,
    setRounded,
    size,
    setSize,
    fontScale,
    setFontScale,
    fontFamily,
    setFontFamily,
    rounded,
    backgroundColor,
    setBackgroundColor,
    textColor,
    setTextColor,
  } = useContext(AvatarFormContext);

  return (
    <div className="flex flex-col gap-1">
      <Input label="Initials" placeholder="JD" value={inputValue} onChange={setInputValue} id="initials-input" />
      <SelectInput label="Avatar size" value={size} onChange={setSize} options={SIZE_OPTIONS} className="w-full" />
      <SelectInput
        label="Font family"
        value={fontFamily}
        onChange={setFontFamily}
        options={FONT_FAMILY_OPTIONS}
        className="w-full"
      />
      <div className="flex flex-col">
        <Input
          value={fontScale}
          onChange={(value: number) => {
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
      <Label>TEXT COLOR</Label>
      <TwitterPicker
        color={textColor}
        onChangeComplete={(color) => setTextColor(color.hex)}
        triangle="hide"
        colors={COLOR_OPTIONS}
      />
      <Label>BACKGROUND COLOR</Label>
      <TwitterPicker
        color={backgroundColor}
        onChangeComplete={(color) => setBackgroundColor(color.hex)}
        triangle="hide"
        colors={COLOR_OPTIONS}
      />
      <div>
        <input id="rounded-input" type="checkbox" checked={rounded} onChange={(e) => setRounded(e.target.checked)} />
        <label htmlFor="rounded-input" className="ml-2 text-white">
          Rounded
        </label>
      </div>
    </div>
  );
};

export default observer(AvatarSettingsForm);
