import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
// import ScaleText from "react-scale-text";

const Canvas = (props) => {
  const {
    lines,
    fontColor,
    backgroundColor,
    height,
    scale,
    logo,
    widthIcon,
    heightIcon,
    fontSizes,
    // setFontSize,
    // ratio,
  } = props;

  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  const getY = (length, i) => {
    if (length === 1) return 0;
    else if (length === 2) return -20 + 40 * i;
    else if (length === 3) return -20 + 20 * i;
    else if (length === 4) return -20 + 15 * i;
    else return 0;
  };

  return (
    <svg width={isMobile ? 250 : 300} height={height * scale}>
      <rect fill={backgroundColor} width="100%" height="100%" />
      {logo && (
        <rect
          textAnchor="middle"
          dominantBaseline="middle"
          x="15%"
          y={(height * scale - heightIcon * scale) / 2}
          width={widthIcon * scale}
          height={heightIcon * scale}
          fill={fontColor}
        />
      )}
      <g
        textAnchor="middle"
        dominantBaseline="middle"
        fill={fontColor}
        style={{ transform: `translate(${logo ? "75%" : "50%"}, 50%)` }}
      >
        {Object.keys(lines).map((key, i) => {
          const length = Object.keys(lines).length;
          if (lines[key]) {
            return (
              <text fontSize={fontSizes[key]} y={getY(length, i)} key={i}>
                {lines[key]}
              </text>
            );
          } else {
            return null;
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

// export const CustomDiv = ({ fontSize, children, setFontSize }) => {
//   useEffect(() => {
//     setFontSize(fontSize);
//   }, [fontSize, setFontSize]);
//   return (
//     <div className="d-flex flex-column justify-content-around align-items-center h-100 w-100">
//       {children}
//     </div>
//   );
// };

export default Canvas;
