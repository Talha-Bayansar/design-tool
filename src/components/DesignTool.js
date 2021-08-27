import React, { useState } from "react";
import Canvas from "./Canvas";
import Select from "./Select/Select";
import TextForm from "./TextForm";
import { useMediaQuery } from "react-responsive";
import img93 from "../img/93.png";
import img1283 from "../img/1283.png";
import img3913 from "../img/3913.png";
import img4282 from "../img/4282.png";
import { ReactComponent as Svg93 } from "../svg/93.svg";
import { ReactComponent as Svg1283 } from "../svg/1283.svg";
import { ReactComponent as Svg3913 } from "../svg/3913.svg";
import { ReactComponent as Svg4282 } from "../svg/4282.svg";
import { ReactComponent as Bg1 } from "../svg/bg_1.svg";
import { ReactComponent as Bg2 } from "../svg/bg_2.svg";

const DesignTool = ({
  width,
  height,
  widthIcon,
  heightIcon,
  defaultBackgroundColor,
  defaultFontColor,
  defaultFontSize,
  lineCount,
}) => {
  //constants--------------------------------------------------------------------------------------------------
  const MIN_LINE_COUNT = 1;
  const MAX_LINE_COUNT = 4;
  const colors = ["#fff", "#000", "#485868", "#73bab4"];
  const icons = [
    { img: img93, svg: <Svg93 /> },
    { img: img1283, svg: <Svg1283 /> },
    { img: img3913, svg: <Svg3913 /> },
    { img: img4282, svg: <Svg4282 /> },
  ];
  const backgroundSvgs = [<Bg1 />, <Bg2 />];
  const fontFamilies = ["Roboto", "Allison", "Rampart One"];
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
      count === 1
        ? defaultFontSize
        : count === 2
        ? defaultFontSize * 0.9
        : count === 3
        ? defaultFontSize * 0.85
        : defaultFontSize * 0.8;
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
  const [backgroundSvg, setBackgroundSvg] = useState(null);
  const [selectedFontFamily, setSelectedFontFamily] = useState("Roboto");
  const [lines, setLines] = useState(initializeLines());
  const [filledLines, setFilledLines] = useState({});
  const [isIcon, setIsIcon] = useState(false);
  const [selectedIconImg, setSelectedIconImg] = useState(null);
  const [selectedIconSvg, setSelectedIconSvg] = useState(null);
  const [fontSizes, setFontSizes] = useState(initializeFontSizes());
  const [selectedInput, setSelectedInput] = useState(null);
  const [selectedInputChildren, setSelectedInputChildren] = useState(null);

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
    resetFontSizes();
  };

  const resetFontSizes = () => {
    setFontSizes(initializeFontSizes());
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
    const finalSvg = (
      <Canvas
        lines={filledLines}
        fontColor={fontColor}
        backgroundColor={backgroundColor}
        width={width}
        height={height}
        scale={1}
        icon={selectedIconSvg}
        widthIcon={widthIcon}
        heightIcon={heightIcon}
        fontSizes={fontSizes}
        setFontSizes={setFontSizes}
        fontFamily={selectedFontFamily}
      />
    );
  };

  const incrementFontSizes = (key) => {
    setFontSizes({ ...fontSizes, [key]: fontSizes[key] + 2 });
  };

  const decrementFontSizes = (key) => {
    if (fontSizes[key] > 13)
      setFontSizes({ ...fontSizes, [key]: fontSizes[key] - 2 });
  };

  const handleIconToggle = (e) => {
    setIsIcon(e.target.checked);
    setSelectedIconImg(null);
    setSelectedIconSvg(null);
    if (!e.target.checked && selectedInput === "icon") {
      setSelectedInput(null);
      setSelectedInputChildren(null);
    }
  };

  // return----------------------------------------------------------------------------------------------------
  return (
    <div className="container custom-flex w-100 justify-content-around my-5 p-5 border">
      <div className="d-flex bg-light sticky-top p-3 mb-3 mb-md-0">
        <Canvas
          lines={filledLines}
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          backgroundSvg={backgroundSvg}
          width={isMobile ? 250 : 300}
          height={height}
          scale={scale}
          icon={selectedIconSvg}
          widthIcon={widthIcon}
          heightIcon={heightIcon}
          fontSizes={fontSizes}
          setFontSizes={setFontSizes}
          fontFamily={selectedFontFamily}
        />
      </div>
      <div className="d-flex flex-column align-items-center align-items-md-start">
        <div className="d-flex flex-wrap align-items-start">
          <Select
            selectedColor={backgroundColor}
            list={colors}
            idStart="bgc"
            onClick={handleChangeColors}
            setSelectedInputChildren={setSelectedInputChildren}
            selectedInput={selectedInput}
            setSelectedInput={setSelectedInput}
            label="Kleur"
          />
          <Select
            selectedColor={fontColor}
            list={colors}
            idStart="fc"
            onClick={handleChangeColors}
            setSelectedInputChildren={setSelectedInputChildren}
            selectedInput={selectedInput}
            setSelectedInput={setSelectedInput}
            label="Tekst"
          />
          <Select
            list={fontFamilies}
            idStart="fontFamily"
            onClick={(e) => setSelectedFontFamily(e.target.id)}
            selectedFontFamily={selectedFontFamily}
            setSelectedInputChildren={setSelectedInputChildren}
            selectedInput={selectedInput}
            setSelectedInput={setSelectedInput}
            label="Font"
          />
          <Select
            list={backgroundSvgs}
            idStart="background_svg"
            onClick={(svg) => setBackgroundSvg(svg)}
            backgroundSvg={backgroundSvg}
            setSelectedInputChildren={setSelectedInputChildren}
            selectedInput={selectedInput}
            setSelectedInput={setSelectedInput}
            label="Decoratie"
          />
          <label className="d-flex flex-column align-items-center align-items-md-start mx-1">
            Icoon
            <input
              type="checkbox"
              style={{ height: "40px", width: "40px" }}
              checked={isIcon}
              onChange={handleIconToggle}
            />
          </label>
          {isIcon && (
            <Select
              selectedColor={fontColor}
              list={icons}
              idStart="icon"
              onClick={(img, svg) => {
                setSelectedIconImg(img);
                setSelectedIconSvg(svg);
              }}
              setSelectedInputChildren={setSelectedInputChildren}
              selectedInput={selectedInput}
              setSelectedInput={setSelectedInput}
              selectedIconImg={selectedIconImg}
              label="Icoon"
            />
          )}
        </div>
        {selectedInputChildren && selectedInputChildren}

        <TextForm
          lines={lines}
          onSubmit={handleSubmit}
          onChange={handleChangeLines}
          onClickIncrement={incrementFontSizes}
          onClickDecrement={decrementFontSizes}
        />
      </div>
    </div>
  );
};

export default DesignTool;
