import Button from "../../components/Button";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";

const GenerateButton = () => {
  function onGenerate() {
    const avatarElement = document.getElementById("avatar");

    toPng(avatarElement).then(function (blob) {
      saveAs(blob, "avatar.png");
    });
  }

  return <Button onClick={onGenerate} text="Generate" />;
};

export default GenerateButton;
