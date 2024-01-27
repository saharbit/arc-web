import { createContext } from "react";
import AvatarPreview from "./AvatarPreview";
import ColorPickers from "./ColorPickers";
import AvatarSettingsForm from "./AvatarSettingsForm";
import GenerateButton from "./GenerateButton";
import AvatarForm from "./AvatarForm";
import ResetButton from "./ResetButton";

export const AvatarFormContext = createContext<AvatarForm>({} as AvatarForm);

const AvatarGenerator = () => {
  return (
    <AvatarFormContext.Provider value={new AvatarForm()}>
      <div className="mx-auto max-w-md">
        <div className="faded-background flex flex-col rounded-md p-4">
          <AvatarSettingsForm />
          <ColorPickers />
          <AvatarPreview className="mb-8" />
          <GenerateButton className="mb-4" />
          <ResetButton />
        </div>
      </div>
    </AvatarFormContext.Provider>
  );
};

export default AvatarGenerator;
