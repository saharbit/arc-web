import React from "react";
import { BlockPicker } from "react-color";
import { DEFAULT_COLORS } from "./consts";

const ColorPickers = ({ backgroundColor, setBackgroundColor, textColor, setTextColor }) => {
  return (
    <div className="flex mb-4">
      <div className="flex flex-col items-center">
        <div className="text-xs text-gray-500 mb-2">BACKGROUND COLOR</div>
        <BlockPicker
          color={backgroundColor}
          onChangeComplete={(color) => setBackgroundColor(color.hex)}
          triangle="hide"
          colors={DEFAULT_COLORS}
          className="mr-2"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="text-xs text-gray-500 mb-2">TEXT COLOR</div>
        <BlockPicker
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
