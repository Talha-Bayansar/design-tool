import React, { useEffect, useState } from "react";
import Canvas from "./Canvas";
import Select from "./Select/Select";
import TextForm from "./TextForm";
// import Svg from "./Svg";
import { useMediaQuery } from "react-responsive";

const DesignTool = ({
  width,
  height,
  defaultBackgroundColor,
  defaultFontColor,
  lineCount,
}) => {
  //constants--------------------------------------------------------------------------------------------------
  const MIN_LINE_COUNT = 1;
  const MAX_LINE_COUNT = 4;
  const colors = ["#fff", "#000", "#485868", "#73bab4"];
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const scale = isMobile ? 250 / width : 300 / width;

  // initialisation functions----------------------------------------------------------------------------------
  const initializeLines = () => {
    const count =
      lineCount > MAX_LINE_COUNT
        ? MAX_LINE_COUNT
        : lineCount < MIN_LINE_COUNT
        ? MIN_LINE_COUNT
        : lineCount;

    let lines = {};
    for (let i = 0; i < count; i++) {
      lines = { ...lines, [`line${i}`]: "" };
    }
    return lines;
  };

  const initializeFontSizes = () => {
    const count =
      lineCount > MAX_LINE_COUNT
        ? MAX_LINE_COUNT
        : lineCount < MIN_LINE_COUNT
        ? MIN_LINE_COUNT
        : lineCount;
    const baseFontSize =
      count === 1 ? 32 : count === 2 ? 28 : count === 3 ? 24 : 20;
    let fontSizes = {};
    for (let i = 0; i < count; i++) {
      fontSizes = { ...fontSizes, [`line${i}`]: baseFontSize };
    }
    return fontSizes;
  };

  // states----------------------------------------------------------------------------------------------------
  const [fontColor, setFontColor] = useState(defaultFontColor || "#000");
  const [backgroundColor, setBackgroundColor] = useState(
    defaultBackgroundColor || "#fff"
  );
  const [lines, setLines] = useState(initializeLines());
  const [filledLines, setFilledLines] = useState({});
  const [logo, setLogo] = useState(false);
  const [fontSizes, setFontSizes] = useState(initializeFontSizes());

  // functions-------------------------------------------------------------------------------------------------
  const handleChangeLines = (e) => {
    const target = e.target;
    const id = target.id;
    const value = target.value;
    const linesConst = { ...lines, [id]: value };
    setLines({ ...lines, [id]: value });
    let filledLinesConst = {};
    Object.keys(linesConst).forEach((key) => {
      if (linesConst[key])
        filledLinesConst = { ...filledLinesConst, [key]: linesConst[key] };
    });
    setFilledLines(filledLinesConst);
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

  const incrementFontSizes = (key) => {
    setFontSizes({ ...fontSizes, [key]: fontSizes[key] + 2 });
  };

  const decrementFontSizes = (key) => {
    setFontSizes({ ...fontSizes, [key]: fontSizes[key] - 2 });
  };

  // useEffects------------------------------------------------------------------------------------------------
  // useEffect(() => {
  //   console.log(lines);
  // }, []);

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

  return (
    <div className="container custom-flex w-100 justify-content-around my-5 p-5 border">
      <div className="d-flex bg-light sticky-top p-3 mb-3 mb-md-0">
        <Canvas
          lines={filledLines}
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          height={height}
          scale={scale}
          logo={logo}
          widthIcon={50}
          heightIcon={50}
          fontSizes={fontSizes}
          // setFontSize={setFontSize}
          // ratio={ratio}
        />
      </div>
      <div className="d-flex flex-column align-items-center align-items-md-start">
        <div className="d-flex flex-wrap align-items-start">
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
          onClickIncrement={incrementFontSizes}
          onClickDecrement={decrementFontSizes}
        />
        {/* {svg && svg} */}
      </div>
    </div>
  );
};

export default DesignTool;
