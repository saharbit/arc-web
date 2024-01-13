const SIZES = [128, 256, 512];
const SIZE_OPTIONS = SIZES.map((size) => ({ value: size, label: `${size}px` }));
const DEFAULT_SIZE = SIZE_OPTIONS[1];

export const DEFAULT_BACKGROUND_COLOR = "#F9F9F9";
export const DEFAULT_TEXT_COLOR = "#000000";
export const DEFAULT_COLORS = [
  "#F9F9F9",
  "#000000",
  "#F47373",
  "#697689",
  "#37D67A",
  "#2CCCE4",
  "#555555",
  "#dce775",
  "#ff8a65",
  "#ba68c8",
];

const FONT_FAMILY = [
  "Ubuntu",
  "Arial",
  "Times New Roman",
  "Courier New",
  "Georgia",
  "Comic Sans MS",
  "Impact",
  "Tahoma",
  "Verdana",
];
const FONT_FAMILY_OPTIONS = FONT_FAMILY.map((font) => ({ value: font, label: font }));
const DEFAULT_FONT_FAMILY = FONT_FAMILY_OPTIONS[0];

export { SIZES, SIZE_OPTIONS, DEFAULT_SIZE, DEFAULT_FONT_FAMILY, FONT_FAMILY_OPTIONS };
