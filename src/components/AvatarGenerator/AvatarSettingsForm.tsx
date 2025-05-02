import { useContext } from "react";
import Input from "../Input";
import { SIZE_OPTIONS, FONT_FAMILY_OPTIONS, COLOR_OPTIONS } from "./consts";
import SelectInput from "../SelectInput";
import { observer } from "mobx-react-lite";
import { AvatarFormContext } from "./AvatarGenerator";
import { GithubPicker, TwitterPicker } from "react-color";
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
    borderEnabled,
    setBorderEnabled,
    borderColor,
    setBorderColor,
    borderWidth,
    setBorderWidth,
  } = useContext(AvatarFormContext);

  return (
    <div className="flex flex-col gap-1">
      <div className="grid grid-cols-2 gap-2">
        <Input label="Initials" placeholder="JD" value={inputValue} onChange={setInputValue} id="initials-input" />

        <SelectInput label="Avatar size" value={size} onChange={setSize} options={SIZE_OPTIONS} className="w-full" />

        <SelectInput
          label="Font family"
          value={fontFamily}
          onChange={setFontFamily}
          options={FONT_FAMILY_OPTIONS}
          className="w-full"
        />

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

      <div className="grid md:grid-cols-2 md:gap-2">
        <div>
          <Label>TEXT COLOR</Label>
          <GithubPicker
            color={textColor}
            onChangeComplete={(color) => setTextColor(color.hex)}
            triangle="hide"
            colors={COLOR_OPTIONS}
          />
        </div>
        <div>
          <Label>BACKGROUND COLOR</Label>
          <GithubPicker
            color={backgroundColor}
            onChangeComplete={(color) => setBackgroundColor(color.hex)}
            triangle="hide"
            colors={COLOR_OPTIONS}
          />
        </div>
      </div>

      <div>
        <input type="checkbox" checked={rounded} onChange={(e) => setRounded(e.target.checked)} />
        <label htmlFor="rounded-input" className="ml-2 text-white">
          Rounded
        </label>
      </div>

      <div>
        <input type="checkbox" checked={borderEnabled} onChange={(e) => setBorderEnabled(e.target.checked)} />
        <label htmlFor="border-enabled-input" className="ml-2 text-white">
          Border
        </label>
      </div>

      {borderEnabled && (
        <>
          <Input
            value={borderWidth}
            onChange={(value: number) => {
              if (value >= 0 && value <= 10) {
                setBorderWidth(value);
              }
            }}
            type="number"
            step="1"
            max="10"
            min="0"
            id="border-width-input"
            label="Border Width"
          />
          <Label>BORDER COLOR</Label>
          <GithubPicker
            color={borderColor}
            onChangeComplete={(color) => setBorderColor(color.hex)}
            triangle="hide"
            colors={COLOR_OPTIONS}
          />
        </>
      )}
    </div>
  );
};

export default observer(AvatarSettingsForm);
