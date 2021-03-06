import React from "react";
import { GithubPicker } from "react-color";
import { DEFAULT_COLORS } from "./AvatarGenerator.constants";

const ColorPickers = ({ backgroundColor, setBackgroundColor, textColor, setTextColor }) => {
  return (
    <div className="flex flex-col mb-8">
      <div className="flex flex-col mb-4">
        <div className="text-xs text-white mb-2">BACKGROUND COLOR</div>
        <GithubPicker
          color={backgroundColor}
          onChangeComplete={(color) => setBackgroundColor(color.hex)}
          triangle="hide"
          colors={DEFAULT_COLORS}
        />
      </div>
      <div className="flex flex-col">
        <div className="text-xs text-white mb-2">TEXT COLOR</div>
        <GithubPicker
          color={textColor}
          onChangeComplete={(color) => setTextColor(color.hex)}
          triangle="hide"
          colors={DEFAULT_COLORS}
        />
      </div>
    </div>
  );
};

export default ColorPickers;
