import React, { useState } from "react";
import { saveAs } from "file-saver";
import { toPng } from "html-to-image";
import Input from "../../components/Input";
import Select from "react-select";
import AvatarPreview from "./AvatarPreview";
import ColorPickers from "./ColorPickers";
import { DEFAULT_BACKGROUND_COLOR, DEFAULT_TEXT_COLOR } from "./consts";
import Button from "../../components/Button";

const SIZES = [128, 256, 512];
const SIZE_OPTIONS = SIZES.map((size) => ({ value: size, label: `${size}px` }));
const DEFAULT_SIZE = SIZE_OPTIONS[1];

const AvatarGenerator = () => {
  const [inputValue, setInputValue] = useState("John Doe");
  const [fontScale, setFontScale] = useState(0.4);
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUND_COLOR);
  const [textColor, setTextColor] = useState(DEFAULT_TEXT_COLOR);
  const [currentSize, setCurrentSize] = useState(DEFAULT_SIZE);
  const [rounded, setRounded] = useState(false);

  function onGenerate() {
    const avatarElement = document.getElementById("avatar");

    toPng(avatarElement).then(function (blob) {
      saveAs(blob, "avatar.png");
    });
  }

  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col pr-4">
        <Input label="Initials" className="mb-2" value={inputValue} onChange={setInputValue} id="initials-input" />
        <div className="flex flex-col mb-2">
          <label className="text-gray-500 text-xs uppercase mb-1">Avatar size</label>
          <Select value={currentSize} onChange={setCurrentSize} options={SIZE_OPTIONS} className="w-full" />
        </div>
        <div className="flex flex-col mb-2">
          <Input
            value={fontScale}
            onChange={setFontScale}
            type="number"
            step="0.1"
            max="1"
            min="0.1"
            id="font-scale-input"
            label="Font scale"
          />
        </div>
        <div className="mb-2">
          <input id="rounded-input" type="checkbox" onChange={(e) => setRounded(e.target.checked)} />
          <label htmlFor="rounded-input" className="ml-2">
            Rounded
          </label>
        </div>
        <Button onClick={onGenerate} text="Generate" />
      </div>
      <div className="w-1/2 flex flex-col">
        <ColorPickers
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
          textColor={textColor}
          setTextColor={setTextColor}
        />
        <AvatarPreview
          inputValue={inputValue}
          rounded={rounded}
          backgroundColor={backgroundColor}
          textColor={textColor}
          fontScale={fontScale}
          currentSize={currentSize}
        />
      </div>
    </div>
  );
};

export default AvatarGenerator;
