import React from "react";
import { useMediaQuery } from "react-responsive";

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
  } = props;

  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  const getY = (length, i) => {
    if (length === 1) return 0;
    else if (length === 2) return `${-20 + 40 * i}%`;
    else if (length === 3) return `${-25 + 25 * i}%`;
    else if (length === 4) return `${-30 + 22.5 * i}%`;
    else return 0;
  };

  const getFontSize = (baseFontSize, text) => {
    const charsPerLine = 12;
    const newEmSize = charsPerLine / text.length;
    let generatedFontSize = baseFontSize;
    if (newEmSize < 1) {
      generatedFontSize = newEmSize * baseFontSize;
    }
    return generatedFontSize;
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
        style={{ transform: `translate(${logo ? "65%" : "50%"}, 50%)` }}
      >
        {Object.keys(lines).map((key, i) => {
          const length = Object.keys(lines).length;
          if (lines[key]) {
            return (
              <text
                fontSize={getFontSize(fontSizes[key], lines[key])}
                y={getY(length, i)}
                key={i}
              >
                {lines[key]}
              </text>
            );
          } else {
            return null;
          }
        })}
      </g>
    </svg>
  );
};

export default Canvas;
