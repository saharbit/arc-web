import { useContext } from "react";
import { TwitterPicker } from "react-color";
import { DEFAULT_COLORS } from "./AvatarGenerator.constants";
import { observer } from "mobx-react-lite";
import { AvatarFormContext } from "./AvatarGenerator";

const ColorPickers = () => {
  const form = useContext(AvatarFormContext);

  const { backgroundColor, setBackgroundColor, textColor, setTextColor } = form;

  return (
    <div className="flex flex-col mb-8">
      <div className="flex flex-col mb-4">
        <div className="text-xs text-white mb-2">BACKGROUND COLOR</div>
        <TwitterPicker
          color={backgroundColor}
          onChangeComplete={(color) => setBackgroundColor(color.hex)}
          triangle="hide"
          colors={DEFAULT_COLORS}
        />
      </div>
      <div className="flex flex-col">
        <div className="text-xs text-white mb-2">TEXT COLOR</div>
        <TwitterPicker
          color={textColor}
          onChangeComplete={(color) => setTextColor(color.hex)}
          triangle="hide"
          colors={DEFAULT_COLORS}
        />
      </div>
    </div>
  );
};

export default observer(ColorPickers);
