import { createContext } from "react";
import AvatarPreview from "./AvatarPreview";
import AvatarSettingsForm from "./AvatarSettingsForm";
import ShareButton from "./ShareButton";
import AvatarForm from "./AvatarForm";

export const AvatarFormContext = createContext<AvatarForm>({} as AvatarForm);

const AvatarGenerator = () => {
  return (
    <AvatarFormContext.Provider value={new AvatarForm()}>
      <div className="mx-auto max-w-md">
        <div className="faded-background flex flex-col rounded p-4 gap-4 relative">
          <AvatarPreview />
          <AvatarSettingsForm />

          <div className="right-4 bottom-4 absolute">
            <ShareButton />
          </div>
        </div>
      </div>
    </AvatarFormContext.Provider>
  );
};

export default AvatarGenerator;
