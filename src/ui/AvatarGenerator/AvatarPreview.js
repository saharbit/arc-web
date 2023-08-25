import React from "react";
import { getInitials } from "./AvatarGenerator.helpers";

const AvatarPreview = ({
  inputValue,
  rounded,
  backgroundColor,
  currentSize,
  fontScale,
  textColor,
  fontFamily,
  className,
}) => {
  return (
    <div className={className}>
      <div className="text-xs text-white mb-2">PREVIEW</div>
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
            fontFamily: fontFamily.value,
          }}
          className="cursor-default select-none"
        >
          {inputValue || "JD"}
        </div>
      </div>
    </div>
  );
};

export default AvatarPreview;
