import { makeAutoObservable } from "mobx";
import {
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_FONT_FAMILY,
  DEFAULT_SIZE,
  DEFAULT_TEXT_COLOR,
} from "./AvatarGenerator.constants";

type SelectOption = { value: any; label: string };

class AvatarForm {
  inputValue: string = "";
  rounded: boolean = false;
  currentSize: SelectOption = DEFAULT_SIZE;
  fontScale: number = 0.4;
  fontFamily: SelectOption = DEFAULT_FONT_FAMILY;
  backgroundColor: string = DEFAULT_BACKGROUND_COLOR;
  textColor: string = DEFAULT_TEXT_COLOR;

  constructor() {
    makeAutoObservable(this);
  }

  setInputValue = (value: string) => {
    this.inputValue = value;
  };
  setRounded = (value: boolean) => {
    this.rounded = value;
  };

  setCurrentSize = (value: SelectOption) => {
    this.currentSize = value;
  };

  setFontScale = (value: number) => {
    this.fontScale = value;
  };

  setFontFamily = (value: SelectOption) => {
    this.fontFamily = value;
  };

  setBackgroundColor = (value: string) => {
    this.backgroundColor = value;
  };

  setTextColor = (value: string) => {
    this.textColor = value;
  };

  reset = () => {
    this.inputValue = "";
    this.rounded = false;
    this.currentSize = DEFAULT_SIZE;
    this.fontScale = 0.4;
    this.fontFamily = DEFAULT_FONT_FAMILY;
    this.backgroundColor = DEFAULT_BACKGROUND_COLOR;
    this.textColor = DEFAULT_TEXT_COLOR;
  };
}

export default AvatarForm;
