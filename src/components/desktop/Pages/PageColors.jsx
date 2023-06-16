import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../App";
import ColorSelector from "../../ColorSelector";

const PageColors = () => {
  const { currentModel, currentImage } = useContext(GlobalContext);
  return (
    <div className="pageColors">
      <img src={currentImage} alt="car" style={{ width: "60%" }} />
      <div className="colorSelectorDiv">
        {currentModel.colors.map((color) => {
          return <ColorSelector color={color} />;
        })}
      </div>
    </div>
  );
};

export default PageColors;
