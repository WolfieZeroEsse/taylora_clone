import React, { useContext } from "react";
import { styled } from "styled-components";
import { GlobalContext } from "../App";
import { BsCheck2 } from "react-icons/bs";

const ModelContainer = styled.div`
  position: relative;
  border-radius: 4px;
  padding: 2em;
  margin: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
`;

const ModelCar = ({ car }) => {
  const {
    currentModel,
    setCurrentModel,
    setCurrentImage,
    setCurrentColor,
    setCurrentAccessories,
  } = useContext(GlobalContext);

  return (
    <ModelContainer
      className={`${currentModel === car ? "borderSelected" : "normalBorder"}`}
    >
      <h2 style={{ paddingBlock: "1em" }}>{car.name}</h2>
      <img src={car.colors[0].img} alt="i3" style={{ width: "80%" }} />
      <span style={{ paddingBottom: "1em", paddingTop: "2em" }}>
        From ${car.price}
      </span>
      <button
        className={`buttonSelectModel ${
          currentModel === car ? "buttonSelectModel-selected" : ""
        }`}
        onClick={async () => {
          setCurrentModel(car);
          setCurrentImage(car.colors[0].img);
          setCurrentColor(car.colors[0]);
          setCurrentAccessories([]);
        }}
      >
        {currentModel === car ? <BsCheck2 color="white" size={"2em"} /> : <></>}
      </button>
    </ModelContainer>
  );
};

export default ModelCar;
