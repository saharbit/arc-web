import Button from "../Button";
import { useContext } from "react";
import { AvatarFormContext } from "./AvatarGenerator";
import refreshIcon from "./assets/refresh-cw.svg";
import Image from "next/image";

const ResetButton = () => {
  const { reset } = useContext(AvatarFormContext);

  return (
    <Button onClick={reset}>
      <Image src={refreshIcon} alt="Reset" />
      <span className="ml-2">Reset</span>
    </Button>
  );
};

export default ResetButton;
