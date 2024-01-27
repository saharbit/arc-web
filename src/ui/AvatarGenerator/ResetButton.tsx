import Button from "../../components/Button";
import { useContext } from "react";
import { AvatarFormContext } from "./AvatarGenerator";

const ResetButton = () => {
  const { reset } = useContext(AvatarFormContext);

  return <Button onClick={reset}>Reset</Button>;
};

export default ResetButton;
