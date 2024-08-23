import { makeAutoObservable } from "mobx";
import {
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_FONT_FAMILY,
  DEFAULT_SIZE,
  DEFAULT_TEXT_COLOR,
  DEFAULT_BORDER_COLOR,
} from "./consts";

type SelectOption = { value: any; label: string };

class AvatarForm {
  inputValue: string = "";
  rounded: boolean = false;
  size: SelectOption = DEFAULT_SIZE;
  fontScale: number = 0.4;
  fontFamily: SelectOption = DEFAULT_FONT_FAMILY;
  backgroundColor: string = DEFAULT_BACKGROUND_COLOR;
  textColor: string = DEFAULT_TEXT_COLOR;
  borderEnabled: boolean = false;
  borderColor: string = DEFAULT_BORDER_COLOR;
  borderWidth: number = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setInputValue = (value: string) => {
    this.inputValue = value;
  };
  setRounded = (value: boolean) => {
    this.rounded = value;
  };

  setSize = (value: SelectOption) => {
    this.size = value;
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

  setBorderEnabled = (value: boolean) => {
    this.borderEnabled = value;
  };

  setBorderColor = (value: string) => {
    this.borderColor = value;
  };

  setBorderWidth = (value: number) => {
    this.borderWidth = value;
  };

  reset = () => {
    this.inputValue = "";
    this.rounded = false;
    this.size = DEFAULT_SIZE;
    this.fontScale = 0.4;
    this.fontFamily = DEFAULT_FONT_FAMILY;
    this.backgroundColor = DEFAULT_BACKGROUND_COLOR;
    this.textColor = DEFAULT_TEXT_COLOR;
    this.borderEnabled = false;
    this.borderColor = DEFAULT_BORDER_COLOR;
    this.borderWidth = 1;
  };
}

export default AvatarForm;
