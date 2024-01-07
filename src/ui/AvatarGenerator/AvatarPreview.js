import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { AvatarFormContext } from "./AvatarGenerator";

const AvatarPreview = observer(({ className }) => {
  const form = useContext(AvatarFormContext);

  const { inputValue, rounded, backgroundColor, currentSize, fontScale, textColor, fontFamily } = form;

  return (
    <div className={className}>
      <div className="text-xs text-white mb-2">PREVIEW</div>
      <div
        id="avatar"
        className={`shadow-lg flex items-center justify-center ${rounded ? "rounded-full" : ""}`}
        style={{
          background: backgroundColor,
          width: "100%",
          aspectRatio: "1/1",
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
});

export default AvatarPreview;
