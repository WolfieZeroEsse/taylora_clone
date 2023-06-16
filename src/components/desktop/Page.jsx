import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import PageModels from "./Pages/PageModels";
import PageColors from "./Pages/PageColors";
import PageAccessories from "./Pages/PageAccessories";
import Summary from "./Pages/Summary";

const Page = () => {
  const { currentPage } = useContext(GlobalContext);
  //renderizzazione condizionale in base al li selected mostro un componente diverso a cui aggiungero animazione come da portfloio
  {
    return currentPage === 1 ? (
      <PageModels />
    ) : currentPage === 2 ? (
      <PageColors />
    ) : currentPage === 3 ? (
      <PageAccessories />
    ) : currentPage === 4 ? (
      <Summary />
    ) : (
      <></>
    );
  }
};

export default Page;
