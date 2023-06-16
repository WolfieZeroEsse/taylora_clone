import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import { GlobalContext } from "../App";
import { BsCheck2 } from "react-icons/bs";

const ContainerAcc = styled.div`
  width: 70%;
  border-radius: 4px;
  padding: 35px 32px 35px 32px;
  margin-bottom: 1.5em;
  &:hover {
    cursor: pointer;
  }
`;

const AccessoryContainer = ({ accessory }) => {
  const { currentAccessories, setCurrentAccessories } =
    useContext(GlobalContext);
  const [clicked, setClicked] = useState(false);

  const switchClass = () => {
    setClicked(!clicked);

    if (!clicked) {
      setCurrentAccessories((prevAccessories) => [
        ...prevAccessories,
        accessory,
      ]);
    } else {
      setCurrentAccessories((prevAccessories) =>
        prevAccessories.filter((prevAccessory) => prevAccessory !== accessory)
      );
    }
  };

  return (
    <ContainerAcc
      className={`accessory ${clicked ? "borderSelected" : "normalBorder"}`}
    >
      <h2>{accessory.name}</h2>
      <div style={{ display: "flex" }}>
        <h2 style={{ marginRight: "1.5em" }}>${accessory.price}</h2>
        <button
          className={`buttonCheckAccessory ${
            clicked
              ? "borderSelected buttonCheckAccessory-selected"
              : "normalBorder"
          }`}
          onClick={() => switchClass()}
        >
          {clicked ? <BsCheck2 color="white" size={"2em"} /> : <></>}
        </button>
      </div>
    </ContainerAcc>
  );
};

export default AccessoryContainer;
