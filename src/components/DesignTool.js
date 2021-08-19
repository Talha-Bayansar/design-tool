import React, { useEffect, useRef, useState } from "react";
import Canvas from "./Canvas";
import Select from "./Select/Select";
import TextForm from "./TextForm";
import Svg from "./Svg";
import { useMediaQuery } from "react-responsive";

const DesignTool = ({
  width,
  height,
  defaultBackgroundColor,
  defaultFontColor,
  lineCount,
}) => {
  //constants--------------------------------------------------------------------------------------------------
  const MAX_LINE_COUNT = 4;
  const colors = ["#fff", "#000", "#485868", "#73bab4"];
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const scale = 300 / width;

  // initialisation functions----------------------------------------------------------------------------------
  const initializeLines = () => {
    const count = lineCount > MAX_LINE_COUNT ? MAX_LINE_COUNT : lineCount;
    let lines = {};
    for (let i = 0; i < count; i++) {
      lines = { ...lines, [`line${i}`]: "" };
    }
    return lines;
  };

  // states----------------------------------------------------------------------------------------------------
  const [fontColor, setFontColor] = useState(defaultFontColor || "#000");
  const [backgroundColor, setBackgroundColor] = useState(
    defaultBackgroundColor || "#fff"
  );
  const [lines, setLines] = useState(initializeLines());
  const [logo, setLogo] = useState(false);

  // functions-------------------------------------------------------------------------------------------------
  const handleChangeLines = (e) => {
    const target = e.target;
    const id = target.id;
    const value = target.value;
    setLines({ ...lines, [id]: value });
  };

  const handleChangeColors = (e) => {
    if (e.target.id[0] === "f") {
      setFontColor(e.target.id.replace("fc_", ""));
    } else {
      setBackgroundColor(e.target.id.replace("bgc_", ""));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(lines);
  };

  // useEffects------------------------------------------------------------------------------------------------
  useEffect(() => {
    console.log(lines);
  }, []);

  // // Font Size Scale for Text Lines
  // const [fontSizeScale1, setFontSizeScale1] = useState(1);
  // const [fontSizeScale2, setFontSizeScale2] = useState(1);
  // const [fontSizeScale3, setFontSizeScale3] = useState(1);

  // // logo, svg, font size
  // const [svg, setSvg] = useState(null);
  // const [fontSize, setFontSize] = useState(16);

  // // Ratio of width and height
  // const ratio = (height / width) * 100;

  // // Scale of canvas compared to generated svg
  // const scale = width / (isMobile ? 300 : 400);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // const generatedSvg = (
  //   //   <Svg
  //   //     logo={logo}
  //   //     color={activeColor}
  //   //     bgColor={activeBgColor}
  //   //     width={width}
  //   //     height={height}
  //   //     line1={line1}
  //   //     line2={line2}
  //   //     line3={line3}
  //   //     fontSizeScale1={fontSizeScale1}
  //   //     fontSizeScale2={fontSizeScale2}
  //   //     fontSizeScale3={fontSizeScale3}
  //   //     fontSize={fontSize}
  //   //     scale={scale}
  //   //   />
  //   // );
  //   // setSvg(generatedSvg);
  // };

  // const handleFontSizeScale1Change = (e) => {
  //   const id = e.target.id;
  //   const max = 1.5;
  //   const min = 0.5;
  //   if (id === "-") {
  //     if (fontSizeScale1 > min) {
  //       setFontSizeScale1(fontSizeScale1 - 0.1);
  //     }
  //   } else {
  //     if (fontSizeScale1 < max) {
  //       setFontSizeScale1(fontSizeScale1 + 0.1);
  //     }
  //   }
  // };

  // const handleFontSizeScale2Change = (e) => {
  //   const id = e.target.id;
  //   const max = 1.5;
  //   const min = 0.5;
  //   if (id === "-") {
  //     if (fontSizeScale2 > min) {
  //       setFontSizeScale2(fontSizeScale2 - 0.1);
  //     }
  //   } else {
  //     if (fontSizeScale2 < max) {
  //       setFontSizeScale2(fontSizeScale2 + 0.1);
  //     }
  //   }
  // };

  // const handleFontSizeScale3Change = (e) => {
  //   const id = e.target.id;
  //   const max = 1.5;
  //   const min = 0.5;
  //   if (id === "-") {
  //     if (fontSizeScale3 > min) {
  //       setFontSizeScale3(fontSizeScale3 - 0.1);
  //     }
  //   } else {
  //     if (fontSizeScale3 < max) {
  //       setFontSizeScale3(fontSizeScale3 + 0.1);
  //     }
  //   }
  // };

  return (
    <div className="container custom-flex w-100 justify-content-around my-5 p-5 border">
      <div className="d-flex bg-light sticky-top p-3">
        <Canvas
          lines={lines}
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          width={width}
          height={height}
          scale={scale}
          logo={logo}
          widthIcon={50}
          heightIcon={50}
          // fontSizeScale1={fontSizeScale1}
          // fontSizeScale2={fontSizeScale2}
          // fontSizeScale3={fontSizeScale3}
          // setFontSize={setFontSize}
          // ratio={ratio}
        />
      </div>
      <div className="d-flex flex-column align-items-center align-items-md-start">
        <div className="d-flex align-items-center align-items-md-start">
          <Select
            selectedColor={backgroundColor}
            colors={colors}
            idStart="bgc"
            onClick={handleChangeColors}
            label="Kleur"
          />
          <Select
            selectedColor={fontColor}
            colors={colors}
            idStart="fc"
            onClick={handleChangeColors}
            label="Tekst"
          />
          <label className="d-flex flex-column align-items-center align-items-md-start mx-1">
            Logo
            <input
              type="checkbox"
              style={{ height: "40px", width: "40px" }}
              checked={logo}
              onChange={(e) => setLogo(e.target.checked)}
            />
          </label>
        </div>

        <TextForm
          lines={lines}
          onSubmit={handleSubmit}
          onChange={handleChangeLines}
          // handleFontSizeScale1Change={handleFontSizeScale1Change}
          // handleFontSizeScale2Change={handleFontSizeScale2Change}
          // handleFontSizeScale3Change={handleFontSizeScale3Change}
        />
        {/* {svg && svg} */}
      </div>
    </div>
  );
};

export default DesignTool;
