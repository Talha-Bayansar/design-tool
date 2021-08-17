import React, { useEffect, useState } from "react";
import Canvas from "./Canvas";
import Select from "./Select/Select";
import TextForm from "./TextForm";
import Svg from "./Svg";

const DesignTool = ({ lineCount }) => {
  const [activeColor, setActiveColor] = useState("#000");
  const [activeBgColor, setActiveBgColor] = useState("#fff");
  const [line1, setLine1] = useState("Naam");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");
  const [logo, setLogo] = useState(false);
  const [svg, setSvg] = useState(null);
  const [fontSize, setFontSize] = useState(16);

  const colors = ["#fff", "#000", "#485868", "#73bab4"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedSvg = (
      <Svg
        logo={logo}
        width={200}
        height={100}
        scale={0.9}
        line1={line1}
        line2={line2}
        line3={line3}
        fontSize={fontSize}
        fontRatio={0.85}
      />
    );
    setSvg(generatedSvg);
  };

  const handleClick = (e) => {
    if (e.target.id[0] === "c") {
      setActiveColor(e.target.id.replace("c_", ""));
    } else {
      setActiveBgColor(e.target.id.replace("bg_", ""));
    }
  };

  const handleChange = (e) => {
    if (e.target.id === "line1") {
      setLine1(e.target.value);
    } else if (e.target.id === "line2") {
      setLine2(e.target.value);
    } else {
      setLine3(e.target.value);
    }
  };

  return (
    <div className="container d-flex w-100 justify-content-around my-3">
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
          line1={line1}
          line2={line2}
          line3={line3}
          setFontSize={setFontSize}
        />
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex flex-column">
          <Select
            activeColor={activeBgColor}
            colors={colors}
            idStart="bg"
            handleClick={handleClick}
            label="Achtergrond"
          />
          <Select
            activeColor={activeColor}
            colors={colors}
            idStart="c"
            handleClick={handleClick}
            label="Tekst"
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
          onSubmit={handleSubmit}
          onChange={handleChange}
          lineCount={lineCount}
          line1={line1}
          line2={line2}
          line3={line3}
        />
        {svg && svg}
      </div>
    </div>
  );
};

export default DesignTool;
