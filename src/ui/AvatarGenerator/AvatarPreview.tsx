import { useContext, useRef } from "react";
import { observer } from "mobx-react-lite";
import { AvatarFormContext } from "./AvatarGenerator";

type Props = {
  className?: string;
};

const AvatarPreview = ({ className }: Props) => {
  const form = useContext(AvatarFormContext);
  const ref = useRef<HTMLDivElement>(null);
  const { inputValue, rounded, backgroundColor, fontScale, textColor, fontFamily } = form;

  return (
    <div className={className}>
      <div className="text-xs text-white mb-2">PREVIEW</div>
      <div
        ref={ref}
        id="avatar"
        className={`aspect-square w-full shadow-lg flex items-center justify-center ${rounded ? "rounded-full" : ""}`}
        style={{
          background: backgroundColor,
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
      </div>
    </div>
  );
};

export default observer(AvatarPreview);
