import React, { useEffect } from "react";
import ScaleText from "react-scale-text";

const Canvas = (props) => {
  const {
    fontColor,
    backgroundColor,
    width,
    height,
    lines,
    // fontSizeScale1,
    // fontSizeScale2,
    // fontSizeScale3,
    // logo,
    // setFontSize,
    // ratio,
  } = props;
  return (
    <svg width={width} height={height}>
      <rect fill={backgroundColor} width="100%" height="100%" />
      <g
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ transform: "translate(50%, 50%)" }}
      >
        {Object.keys(lines).map((key, i) => {
          if (lines[key]) {
            return (
              <text fill={fontColor} y={-20 + 15 * i} key={i}>
                {lines[key]}
              </text>
            );
          }
        })}
      </g>
    </svg>

    // <div
    //   className="position-relative w-100"
    //   style={{
    //     backgroundColor: backgroundColor,
    //     paddingTop: `${ratio}%`,
    //   }}
    // >
    //   <div
    //     className={`d-flex position-absolute justify-content-${
    //       logo ? "between" : "center"
    //     } align-items-center p-3`}
    //     style={{ top: 0, right: 0, bottom: 0, left: 0 }}
    //   >
    //     {logo && (
    //       <div
    //         className="mx-3 p-4"
    //         style={{ height: "50px", width: "50px", backgroundColor: "black" }}
    //       ></div>
    //     )}
    //     {(line1 || line2 || line3) && (
    //       <ScaleText
    //         minFontSize={5}
    //         maxFontSize={line1 && line2 && line3 ? 20 : 50}
    //       >
    //         <CustomDiv setFontSize={setFontSize}>
    //           {line1 && (
    //             <span
    //               className="text-nowrap"
    //               style={{
    //                 color: color,
    //                 fontSize: `${fontSizeScale1 * 100}%`,
    //               }}
    //             >
    //               {line1}
    //             </span>
    //           )}
    //           {line2 && (
    //             <span
    //               className="text-nowrap"
    //               style={{ color: color, fontSize: `${fontSizeScale2 * 100}%` }}
    //             >
    //               {line2}
    //             </span>
    //           )}
    //           {line3 && (
    //             <span
    //               className="text-nowrap"
    //               style={{ color: color, fontSize: `${fontSizeScale3 * 100}%` }}
    //             >
    //               {line3}
    //             </span>
    //           )}
    //         </CustomDiv>
    //       </ScaleText>
    //     )}
    //   </div>
    // </div>
  );
};

export const CustomDiv = ({ fontSize, children, setFontSize }) => {
  useEffect(() => {
    setFontSize(fontSize);
  }, [fontSize]);
  return (
    <div className="d-flex flex-column justify-content-around align-items-center h-100 w-100">
      {children}
    </div>
  );
};

export default Canvas;
