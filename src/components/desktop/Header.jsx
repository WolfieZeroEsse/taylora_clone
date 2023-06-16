import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import SelectorPage from "./SelectorPage";

const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <button className="buttonArticles">
            <BsChevronLeft />
            <span>Articles & Download</span>
          </button>
          <h1 className="title">PRODUCT BUILDER</h1>
        </div>
        <SelectorPage />
      </div>
    </>
  );
};

export default Header;
