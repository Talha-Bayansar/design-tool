import { useState } from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import ColorRow from "./components/ColorRow";
import TextForm from "./components/TextForm";

function App() {
  const [activeColor, setActiveColor] = useState("#000");
  const [activeBgColor, setActiveBgColor] = useState("#fff");
  const [firstLine, setFirstLine] = useState("Naam");
  const [secondLine, setSecondLine] = useState("");
  const [logo, setLogo] = useState(false);

  const colors = ["#fff", "#000", "#485868", "#73bab4"];

  const handleClick = (e) => {
    if (e.target.id[0] === "c") {
      setActiveColor(e.target.id.replace("c_", ""));
    } else {
      setActiveBgColor(e.target.id.replace("bg_", ""));
    }
  };

  const handleChange = (e) => {
    if (e.target.id === "line1") {
      setFirstLine(e.target.value);
    } else {
      setSecondLine(e.target.value);
    }
  };

  return (
    <div className="d-flex flex-column">
      <nav className="w-100 d-flex justify-content-center bg-primary p-3 mb-5">
        Navbar
      </nav>
      <div className="container d-flex w-100 justify-content-around">
        <div
          className="d-flex flex-column border p-5 bg-light"
          style={{
            width: "400px",
            height: "200px",
          }}
        >
          <Canvas
            logo={logo}
            color={activeColor}
            backgroundColor={activeBgColor}
            line1={firstLine}
            line2={secondLine}
          />
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex flex-column">
            <ColorRow
              text="Achtergrond"
              colors={colors}
              onClick={handleClick}
              activeColor={activeBgColor}
              idStart="bg"
            />
            <ColorRow
              text="Tekst"
              colors={colors}
              onClick={handleClick}
              activeColor={activeColor}
              idStart="c"
            />
          </div>
          <label className="d-flex flex-column my-2">
            Logo
            <input
              type="checkbox"
              checked={logo}
              onChange={(e) => setLogo(e.target.checked)}
            />
          </label>

          <TextForm
            onSubmit={(e) => e.preventDefault()}
            onChange={handleChange}
            firstLine={firstLine}
            secondLine={secondLine}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
