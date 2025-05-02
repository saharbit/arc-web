import Button from "../Button";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";
import shareIcon from "./assets/share.svg";
import Image from "next/image";

const ShareButton = ({ ...props }) => {
  function onGenerate() {
    const avatarElement = document.getElementById("avatar");

    toPng(avatarElement!, {
      filter: (node) => node.id !== "avatar-size-preview",
    }).then(function (blob) {
      if (navigator.share) {
        const file = new File([blob], "avatar.png", { type: "image/png" });

        navigator
          .share({
            files: [file],
            title: "My Avatar",
          })
          .catch((error) => {
            console.error("Error sharing:", error);
          });
      } else {
        saveAs(blob, "avatar.png");
      }
    });
  }

  return (
    <Button onClick={onGenerate} {...props}>
      <Image src={shareIcon} alt="Share" />
    </Button>
  );
};

export default ShareButton;
