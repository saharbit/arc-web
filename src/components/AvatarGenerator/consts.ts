export const SIZES = [128, 256, 512];
export const SIZE_OPTIONS = SIZES.map((size) => ({ value: size, label: `${size}px` }));
export const DEFAULT_SIZE = SIZE_OPTIONS[1];
export const COLOR_OPTIONS = [
  "#FFFFFF", // White
  "#000000", // Black
  "#7CB9E8", // Sky Blue
  "#86E49D", // Fresh Mint
  "#FFE156", // Warm Yellow
  "#FFB59E", // Peach
  "#9DB17C", // Sage Green
  "#B784E0", // Purple
  "#FF8B83", // Coral
  "#75CDD8", // Aqua
];
export const DEFAULT_BACKGROUND_COLOR = "#FFFFFF";
export const DEFAULT_TEXT_COLOR = "#000000";
export const DEFAULT_BORDER_COLOR = "#000000";
export const FONT_FAMILY = [
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
export const FONT_FAMILY_OPTIONS = FONT_FAMILY.map((font) => ({ value: font, label: font }));
export const DEFAULT_FONT_FAMILY = FONT_FAMILY_OPTIONS[0];
