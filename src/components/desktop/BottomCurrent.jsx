import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../App";

const BottomCurrent = () => {
  const { currentModel, currentColor, currentAccessories } =
    useContext(GlobalContext);
  const [tot, setTot] = useState(0);
  const calcTot = () => {
    let model = currentModel?.price;
    let color = currentColor?.price;
    const arrAccessories = currentAccessories?.map((el) => el.price) || [];
    let accessories = arrAccessories.reduce(
      (previous, current) => previous + current,
      0
    );

    !isNaN(model) ? (model = model) : (model = 0);
    !isNaN(color) ? (color = color) : (color = 0);
    !isNaN(accessories) || accessories === !undefined
      ? (accessories = accessories)
      : (accessories = 0);

    const tot = model + color + accessories;

    setTot(tot);
  };

  useEffect(() => {
    calcTot();
  }, [currentModel, currentColor, currentAccessories]);

  return (
    <div>
      <span>TOT: $</span>
      <span>{tot}</span>
    </div>
  );
};

export default BottomCurrent;
