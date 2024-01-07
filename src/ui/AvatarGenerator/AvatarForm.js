import { makeAutoObservable } from "mobx";
import {
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_FONT_FAMILY,
  DEFAULT_SIZE,
  DEFAULT_TEXT_COLOR,
} from "./AvatarGenerator.constants";

class AvatarForm {
  inputValue = "";
  rounded = false;
  currentSize = DEFAULT_SIZE;
  fontScale = 0.4;
  fontFamily = DEFAULT_FONT_FAMILY;
  backgroundColor = DEFAULT_BACKGROUND_COLOR;
  textColor = DEFAULT_TEXT_COLOR;

  constructor() {
    makeAutoObservable(this);
  }

  setInputValue = (value) => {
    this.inputValue = value;
  };
  setRounded = (value) => {
    this.rounded = value;
  };

  setCurrentSize = (value) => {
    this.currentSize = value;
  };

  setFontScale = (value) => {
    this.fontScale = value;
  };

  setFontFamily = (value) => {
    this.fontFamily = value;
  };

  setBackgroundColor = (value) => {
    this.backgroundColor = value;
  };

  setTextColor = (value) => {
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
