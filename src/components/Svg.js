import React from "react";

const Svg = ({
  logo,
  color,
  bgColor,
  line1,
  line2,
  line3,
  fontSize,
  fontRatio,
  width,
  height,
}) => {
  return (
    <svg style={{ marginTop: "1rem" }} width={width} height={height}>
      <rect width="100%" height="100%" stroke="black" fill={bgColor} />
      {(line1 || line2) && (
        <g>
          {logo && (
            <rect x="8%" y="25%" width="50px" height="50px" fill="black"></rect>
          )}
          <g>
            {line1 && (
              <text
                x={logo ? "63%" : "50%"}
                y={line2 && line3 ? "25%" : line2 || line3 ? "30%" : "55%"}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={color}
                fontSize={`${fontSize * fontRatio}px`}
              >
                {line1}
              </text>
            )}
            {line2 && (
              <text
                x={logo ? "63%" : "50%"}
                y={line1 && line3 ? "51%" : line1 ? "70%" : "30%"}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={color}
                fontSize={`${fontSize * fontRatio}px`}
              >
                {line2}
              </text>
            )}
            {line3 && (
              <text
                x={logo ? "63%" : "50%"}
                y={line1 && line2 ? "75%" : line1 || line2 ? "70%" : "55%"}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={color}
                fontSize={`${fontSize * fontRatio}px`}
              >
                {line3}
              </text>
            )}
          </g>
        </g>
      )}
    </svg>
  );
};

export default Svg;
