import { useState } from "react";
import "./App.css";
import { Desktop, Mobile } from "./responsive/responsive";
import Header from "./components/desktop/Header";
import Content from "./components/desktop/Content";
import BottomBar from "./components/desktop/BottomBar";
import { createContext } from "react";

export const GlobalContext = createContext();

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentModel, setCurrentModel] = useState({});
  const [currentImage, setCurrentImage] = useState("");
  const [currentColor, setCurrentColor] = useState({});
  const [currentAccessories, setCurrentAccessories] = useState([]);

  return (
    <>
      <GlobalContext.Provider
        value={{
          currentPage,
          setCurrentPage,
          currentModel,
          setCurrentModel,
          currentColor,
          setCurrentColor,
          currentImage,
          setCurrentImage,
          currentAccessories,
          setCurrentAccessories,
        }}
      >
        <Desktop>
          <div className="containerDesktop">
            <Header />
            <Content />
            <BottomBar />
          </div>
        </Desktop>
        <Mobile>PIRLA</Mobile>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
