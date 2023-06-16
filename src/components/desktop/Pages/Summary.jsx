import React, { useContext } from "react";
import { GlobalContext } from "../../../App";
import ColorSelector from "../../ColorSelector";

const Summary = () => {
  const { currentImage, currentModel, currentColor, currentAccessories } =
    useContext(GlobalContext);
  return (
    <div className="summary">
      <h3 className="withUpperLine">MODEL</h3>
      <img src={currentImage} alt="car" style={{ width: "55%" }} />
      <h2>BMW i8</h2>
      <p style={{ textAlign: "center", marginBottom: "2em" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
        tempore. Sapiente delectus saepe laboriosam necessitatibus deleniti
        laborum ipsa dicta, ducimus molestiae quas ea dolores, nulla ut alias
        atque voluptate? Voluptas?
      </p>
      <h3 className="withUpperLine">COLOR</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2em",
        }}
      >
        <ColorSelector summaryColor={true} color={currentColor} />
        <h2>
          {currentColor.name} - ${currentColor.price}
        </h2>
      </div>
      <h3 className="withUpperLine">ACCESSORIES</h3>
      <ul>
        {currentAccessories.map((el) => (
          <li>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
