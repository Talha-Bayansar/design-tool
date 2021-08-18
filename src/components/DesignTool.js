import React, { useState } from "react";
import Canvas from "./Canvas";
import Select from "./Select/Select";
import TextForm from "./TextForm";
import Svg from "./Svg";

const DesignTool = ({ width, height, lineCount }) => {
  // Color
  const [activeColor, setActiveColor] = useState("#000");
  const [activeBgColor, setActiveBgColor] = useState("#fff");

  // Text Lines
  const [line1, setLine1] = useState("Naam");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");

  // Font Size Scale for Text Lines
  const [fontSizeScale1, setFontSizeScale1] = useState(1);
  const [fontSizeScale2, setFontSizeScale2] = useState(1);
  const [fontSizeScale3, setFontSizeScale3] = useState(1);

  // logo, svg, font size
  const [logo, setLogo] = useState(false);
  const [svg, setSvg] = useState(null);
  const [fontSize, setFontSize] = useState(16);

  // Ratio of width and height
  const ratio = (height / width) * 100;

  // Scale of canvas compared to generated svg
  const scale = width / 400;

  const colors = ["#fff", "#000", "#485868", "#73bab4"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedSvg = (
      <Svg
        logo={logo}
        color={activeColor}
        bgColor={activeBgColor}
        width={width}
        height={height}
        line1={line1}
        line2={line2}
        line3={line3}
        fontSizeScale1={fontSizeScale1}
        fontSizeScale2={fontSizeScale2}
        fontSizeScale3={fontSizeScale3}
        fontSize={fontSize}
        scale={scale}
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
    if (e.target.id === "line0") {
      setLine1(e.target.value);
    } else if (e.target.id === "line1") {
      setLine2(e.target.value);
    } else {
      setLine3(e.target.value);
    }
  };

  const handleFontSizeScale1Change = (e) => {
    const id = e.target.id;
    const max = 1.5;
    const min = 0.5;
    if (id === "-") {
      if (fontSizeScale1 > min) {
        setFontSizeScale1(fontSizeScale1 - 0.1);
      }
    } else {
      if (fontSizeScale1 < max) {
        setFontSizeScale1(fontSizeScale1 + 0.1);
      }
    }
  };

  const handleFontSizeScale2Change = (e) => {
    const id = e.target.id;
    const max = 1.5;
    const min = 0.5;
    if (id === "-") {
      if (fontSizeScale2 > min) {
        setFontSizeScale2(fontSizeScale2 - 0.1);
      }
    } else {
      if (fontSizeScale2 < max) {
        setFontSizeScale2(fontSizeScale2 + 0.1);
      }
    }
  };

  const handleFontSizeScale3Change = (e) => {
    const id = e.target.id;
    const max = 1.5;
    const min = 0.5;
    if (id === "-") {
      if (fontSizeScale3 > min) {
        setFontSizeScale3(fontSizeScale3 - 0.1);
      }
    } else {
      if (fontSizeScale3 < max) {
        setFontSizeScale3(fontSizeScale3 + 0.1);
      }
    }
  };

  return (
    <div className="container custom-flex w-100 justify-content-around my-5 p-5 border">
      <div
        className="d-flex flex-column border p-3 bg-light sticky-top mb-5 mb-md-0"
        style={{
          width: "400px",
          height: "min-content",
          boxSizing: "unset",
        }}
      >
        <Canvas
          logo={logo}
          color={activeColor}
          backgroundColor={activeBgColor}
          line1={line1}
          line2={line2}
          line3={line3}
          fontSizeScale1={fontSizeScale1}
          fontSizeScale2={fontSizeScale2}
          fontSizeScale3={fontSizeScale3}
          setFontSize={setFontSize}
          ratio={ratio}
        />
      </div>
      <div className="d-flex flex-column align-items-center align-items-md-start">
        <div className="d-flex flex-column align-items-center align-items-md-start">
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
        <label className="d-flex flex-column align-items-center align-items-md-start my-2">
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
          handleFontSizeScale1Change={handleFontSizeScale1Change}
          handleFontSizeScale2Change={handleFontSizeScale2Change}
          handleFontSizeScale3Change={handleFontSizeScale3Change}
        />
        {svg && svg}
      </div>
    </div>
  );
};

export default DesignTool;
