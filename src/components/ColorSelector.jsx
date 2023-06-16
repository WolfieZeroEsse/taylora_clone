import React, { useContext } from "react";
import { GlobalContext } from "../App";

const ColorSelector = ({ color, summaryColor }) => {
  const { currentColor, setCurrentColor, setCurrentImage, currentModel } =
    useContext(GlobalContext);

  return (
    <div
      className={`colorSelector 
      ${
        currentColor.exa === color.exa && !summaryColor
          ? "colorSelector-selected"
          : ""
      } `}
      style={{ backgroundColor: color.exa }}
      onClick={() => {
        setCurrentColor(color);
        setCurrentImage(
          currentModel.colors.find((colorr) => colorr.exa === color.exa).img
        );
      }}
    />
  );
};

export default ColorSelector;
