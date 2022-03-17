import React, { useState } from "react";
import AvatarPreview from "./AvatarPreview";
import ColorPickers from "./ColorPickers";
import AvatarSettingsForm from "./AvatarSettingsForm";
import { DEFAULT_BACKGROUND_COLOR, DEFAULT_SIZE, DEFAULT_TEXT_COLOR } from "./AvatarGenerator.constants";
import GenerateButton from "./GenerateButton";

const AvatarGenerator = () => {
  const [inputValue, setInputValue] = useState("John Doe");
  const [fontScale, setFontScale] = useState(0.4);
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUND_COLOR);
  const [textColor, setTextColor] = useState(DEFAULT_TEXT_COLOR);
  const [currentSize, setCurrentSize] = useState(DEFAULT_SIZE);
  const [rounded, setRounded] = useState(false);

  return (
    <div className="mx-auto max-w-lg">
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }} className="flex flex-col rounded-md p-4">
        <AvatarSettingsForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          rounded={rounded}
          setRounded={setRounded}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          fontScale={fontScale}
          setFontScale={setFontScale}
        />
        <ColorPickers
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
          textColor={textColor}
          setTextColor={setTextColor}
        />
        <AvatarPreview
          className="mb-12"
          inputValue={inputValue}
          rounded={rounded}
          backgroundColor={backgroundColor}
          textColor={textColor}
          fontScale={fontScale}
          currentSize={currentSize}
        />
        <GenerateButton />
      </div>
    </div>
  );
};

export default AvatarGenerator;
