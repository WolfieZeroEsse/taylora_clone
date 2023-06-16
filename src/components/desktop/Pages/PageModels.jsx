import React from "react";
import { cars } from "../../../data/cars";
import ModelCar from "../../ModelCar";

const PageModels = () => {
  return (
    <div className="contentPageModels">
      {cars.map((car) => {
        return <ModelCar car={car} key={car.name} />;
      })}
    </div>
  );
};

export default PageModels;
