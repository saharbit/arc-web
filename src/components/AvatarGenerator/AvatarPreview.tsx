import { useContext, useRef } from "react";
import { observer } from "mobx-react-lite";
import { AvatarFormContext } from "./AvatarGenerator";

type Props = {
  className?: string;
};

const AvatarPreview = ({ className }: Props) => {
  const form = useContext(AvatarFormContext);
  const ref = useRef<HTMLDivElement>(null);
  const {
    inputValue,
    rounded,
    backgroundColor,
    fontScale,
    textColor,
    fontFamily,
    size: { value: pixelSize },
    borderEnabled,
    borderColor,
    borderWidth,
  } = form;

  return (
    <div className={className}>
      <div className="text-xs text-white">PREVIEW</div>
      <div
        ref={ref}
        id="avatar-preview"
        className={`aspect-square w-full shadow-lg flex items-center justify-center ${rounded ? "rounded-full" : "rounded"} relative`}
        style={{
          background: backgroundColor,
          border: borderEnabled ? `${borderWidth}px solid ${borderColor}` : "none",
        }}
      >
        <div
          style={{
            fontSize: `${fontScale * (ref.current?.offsetWidth || 512)}px`,
            color: textColor,
            fontFamily: fontFamily.value,
          }}
          className="cursor-default select-none"
        >
          {inputValue || "JD"}
        </div>
        <div
          className="absolute bottom-2 right-2 bg-white text-black text-xs px-1 py-0.5 rounded shadow-md"
          id="avatar-size-preview"
        >
          {pixelSize}x{pixelSize}
        </div>
      </div>
    </div>
  );
};

export default observer(AvatarPreview);
