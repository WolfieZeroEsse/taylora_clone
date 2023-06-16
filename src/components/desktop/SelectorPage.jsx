import React, { useContext } from "react";
import { GlobalContext } from "../../App";

const SelectorPage = () => {
  const { setCurrentPage, currentModel } = useContext(GlobalContext);

  return (
    <div className="selectorPage">
      <ul className="ul-selectorPage">
        <li onClick={() => setCurrentPage(1)}>MODELS</li>
        <li
          className={`${
            Object.keys(currentModel).length === 0 ? "disabled-menu " : ""
          }`}
          onClick={() => setCurrentPage(2)}
        >
          COLORS
        </li>
        <li
          className={`${
            Object.keys(currentModel).length === 0 ? "disabled-menu " : ""
          }`}
          onClick={() => setCurrentPage(3)}
        >
          ACCESSORIES
        </li>
        <li
          className={`${
            Object.keys(currentModel).length === 0 ? "disabled-menu " : ""
          }`}
          onClick={() => setCurrentPage(4)}
        >
          SUMMARY
        </li>
      </ul>
    </div>
  );
};

export default SelectorPage;
