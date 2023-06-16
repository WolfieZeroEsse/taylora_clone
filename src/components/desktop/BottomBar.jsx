import React from "react";
import BottomButtons from "./BottomButtons";
import BottomCurrent from "./BottomCurrent";

const BottomBar = () => {
  return (
    <div className="bottomBar">
      <div className="leftBottom">
        <BottomCurrent />
      </div>
      <div className="rightBottom">
        <BottomButtons />
      </div>
    </div>
  );
};

export default BottomBar;
