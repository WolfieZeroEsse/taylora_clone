import React, { useContext } from "react";
import { GlobalContext } from "../../../App";
import AccessoryContainer from "../../AccessoryContainer";

const PageAccessories = () => {
  const { currentModel } = useContext(GlobalContext);
  return (
    <div className="pageAccessories">
      {currentModel.accessories.map((acc) => {
        return <AccessoryContainer accessory={acc} />;
      })}
    </div>
  );
};

export default PageAccessories;
