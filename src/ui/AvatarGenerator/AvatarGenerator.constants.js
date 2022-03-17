const SIZES = [128, 256, 512];
const SIZE_OPTIONS = SIZES.map((size) => ({ value: size, label: `${size}px` }));
const DEFAULT_SIZE = SIZE_OPTIONS[1];

export { SIZES, SIZE_OPTIONS, DEFAULT_SIZE };
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
