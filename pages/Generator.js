import React, { useState } from "react";
import { BlockPicker } from "react-color";
import { saveAs } from "file-saver";
import { toPng } from "html-to-image";

const SIZES = [128, 256, 512];
const DEFAULT_COLOR = "#000000";

const getInitials = (name) =>
  name
    .split(" ")
    .map((n, i, a) => (i === 0 || i + 1 === a.length ? n[0] : null))
    .join("");

const Generator = () => {
  const [inputValue, setInputValue] = useState("John Doe");
  const [fontSize, setFontSize] = useState(0.4);
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [currentSize, setCurrentSize] = useState(SIZES[2]);
  const [rounded, setRounded] = useState(false);

  function onGenerate() {
    const avatarElement = document.getElementById("avatar");

    toPng(avatarElement).then(function (blob) {
      saveAs(blob, "avatar.ico");
    });
  }

  return (
    <div>
      <div className="mb-2">
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="Text here"
        />
      </div>
      <div className="flex mb-2">
        {SIZES.map((size) => {
          const isSelected = size === currentSize;

          return (
            <div
              className={`cursor-pointer p-2 mr-2 transition-all hover:bg-black hover:text-white duration-500 ${
                isSelected ? "bg-black text-white" : ""
              }`}
              key={size}
              onClick={() => setCurrentSize(size)}
            >{`${size}px`}</div>
          );
        })}
      </div>
      <div
        id="avatar"
        className={`flex items-center justify-center mb-4 ${
          rounded ? "rounded-full" : ""
        }`}
        style={{
          background: color,
          height: currentSize,
          width: currentSize,
        }}
      >
        <div style={{ fontSize: fontSize * currentSize }}>
          {getInitials(inputValue)}
        </div>
      </div>
      <BlockPicker
        color={color}
        onChangeComplete={(color) => {
          return setColor(color.hex);
        }}
        className="mb-2"
      />
      <div className="mb-2">
        <input
          className="w-32 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setFontSize(e.target.value)}
          value={fontSize}
          placeholder="Font scale"
          type="number"
          step="0.1"
          max="1"
          min="0"
        />
      </div>
      <div className="mb-2">
        <input
          id="rounded-input"
          type="checkbox"
          onChange={(e) => setRounded(e.target.checked)}
        />
        <label htmlFor="rounded-input" className="ml-2">
          Rounded
        </label>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={onGenerate}
      >
        Generate
      </button>
    </div>
  );
};

export default Generator;
