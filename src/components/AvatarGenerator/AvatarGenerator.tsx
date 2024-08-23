import { createContext } from "react";
import AvatarPreview from "./AvatarPreview";
import AvatarSettingsForm from "./AvatarSettingsForm";
import GenerateButton from "./GenerateButton";
import AvatarForm from "./AvatarForm";
import ResetButton from "./ResetButton";

export const AvatarFormContext = createContext<AvatarForm>({} as AvatarForm);

const AvatarGenerator = () => {
  return (
    <AvatarFormContext.Provider value={new AvatarForm()}>
      <div className="mx-auto max-w-md">
        <div className="faded-background flex flex-col rounded-md p-4 gap-1">
          <AvatarSettingsForm />
          <AvatarPreview className="my-8" />
          <GenerateButton className="mb-2" />
          <ResetButton />
        </div>
      </div>
    </AvatarFormContext.Provider>
  );
};

export default AvatarGenerator;
