import Button from "../../components/Button";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";
import generateIcon from "./assets/download.svg";
import Image from "next/image";

const GenerateButton = ({ ...props }) => {
  function onGenerate() {
    const avatarElement = document.getElementById("avatar");

    toPng(avatarElement!).then(function (blob) {
      saveAs(blob, "avatar.png");
    });
  }

  return (
    <Button onClick={onGenerate} {...props}>
      <Image src={generateIcon} alt="Generate" />
      <span className="ml-2">Generate</span>
    </Button>
  );
};

export default GenerateButton;
