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
        <div className="faded-background p-4 flex flex-col rounded gap-4">
          <AvatarPreview />
          <AvatarSettingsForm />

          <div className="right-5 bottom-5 fixed">
            <ShareButton />
          </div>
        </div>
      </div>
    </AvatarFormContext.Provider>
  );
};

export default AvatarGenerator;
