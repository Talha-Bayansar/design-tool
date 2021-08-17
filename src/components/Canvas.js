import React, { useEffect } from "react";
import ScaleText from "react-scale-text";

const Canvas = (props) => {
  const {
    color,
    backgroundColor,
    line1,
    line2,
    line3,
    logo,
    setFontSize,
    ratio,
  } = props;
  return (
    <div
      className="position-relative w-100"
      style={{
        backgroundColor: backgroundColor,
        paddingTop: `${ratio}%`,
      }}
    >
      <div
        className={`d-flex position-absolute justify-content-${
          logo ? "between" : "center"
        } align-items-center p-3`}
        style={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        {logo && (
          <div
            className="ml-3 p-4"
            style={{ height: "50px", width: "50px", backgroundColor: "black" }}
          ></div>
        )}
        {(line1 || line2 || line3) && (
          <ScaleText
            minFontSize={5}
            maxFontSize={line1 && line2 && line3 ? 20 : 50}
          >
            <CustomDiv setFontSize={setFontSize}>
              {line1 && (
                <span className="text-nowrap" style={{ color: color }}>
                  {line1}
                </span>
              )}
              {line2 && (
                <span className="text-nowrap" style={{ color: color }}>
                  {line2}
                </span>
              )}
              {line3 && (
                <span className="text-nowrap" style={{ color: color }}>
                  {line3}
                </span>
              )}
            </CustomDiv>
          </ScaleText>
        )}
      </div>
    </div>
  );
};

export const CustomDiv = ({ fontSize, children, setFontSize }) => {
  useEffect(() => {
    setFontSize(fontSize);
  }, [fontSize]);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100">
      {children}
    </div>
  );
};

export default Canvas;
