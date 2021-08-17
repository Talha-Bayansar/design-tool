import React from "react";

const Svg = ({
  logo,
  line1,
  line2,
  fontSize,
  fontRatio,
  width,
  height,
  scale,
}) => {
  return (
    <svg style={{ marginTop: "1rem" }} width="304" height="104">
      <rect width="100%" height="100%" stroke="black" fill="white" />
      {(line1 || line2) && (
        <g>
          {logo && (
            <rect
              x="10%"
              y="25%"
              width="50px"
              height="50px"
              fill="black"
            ></rect>
          )}
          <g>
            {line1 && (
              <text
                x={logo ? "63%" : "50%"}
                y={line2 ? "30%" : "55%"}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="black"
                fontSize={`${fontSize * fontRatio}px`}
              >
                {line1}
              </text>
            )}
            {line2 && (
              <text
                x={logo ? "63%" : "50%"}
                y={line1 ? "70%" : "55%"}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="black"
                fontSize={`${fontSize * fontRatio}px`}
              >
                {line2}
              </text>
            )}
          </g>
        </g>
      )}
    </svg>
  );
};

export default Svg;
