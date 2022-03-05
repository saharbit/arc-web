import React from "react";
import { getInitials } from "./utils";

const AvatarPreview = ({ inputValue, rounded, backgroundColor, currentSize, fontScale, textColor }) => {
  return (
    <div>
      <div className="text-xs text-gray-500 mb-2">PREVIEW</div>
      <div
        id="avatar"
        className={`shadow-lg flex items-center justify-center ${rounded ? "rounded-full" : ""}`}
        style={{
          background: backgroundColor,
          height: currentSize.value,
          width: currentSize.value,
        }}
      >
        <div
          style={{
            fontSize: fontScale * currentSize.value,
            color: textColor,
          }}
          className="cursor-default select-none"
        >
          {getInitials(inputValue)}
        </div>
      </div>
    </div>
  );
};

export default AvatarPreview;
