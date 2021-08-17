import React, { useEffect } from "react";
import ScaleText from "react-scale-text";

const Canvas = (props) => {
  const { color, backgroundColor, line1, line2, line3, logo, setFontSize } =
    props;
  return (
    <div
      className={`d-flex justify-content-${
        logo ? "between" : "center"
      } align-items-center h-100 w-100 p-3`}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {logo && (
        <div
          className="border ml-3"
          style={{ height: "50px", width: "60px", backgroundColor: "black" }}
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
