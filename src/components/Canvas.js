import React from "react";

const Canvas = (props) => {
  const {
    lines,
    fontColor,
    backgroundColor,
    width,
    height,
    scale,
    icon,
    widthIcon,
    heightIcon,
    fontSizes,
    setFontSizes,
    fontFamily,
  } = props;

  const getY = (length, i) => {
    if (length === 1) return 0;
    else if (length === 2) return `${-20 + 40 * i}%`;
    else if (length === 3) return `${-25 + 25 * i}%`;
    else if (length === 4) return `${-30 + 22.5 * i}%`;
    else return 0;
  };

  const handleFontSize = ({ width }, key) => {
    const maxWidth = 120;
    const newEmSize = maxWidth / width;
    if (newEmSize < 1) {
      setFontSizes({
        ...fontSizes,
        [key]: fontSizes[key] * newEmSize,
      });
    }
  };

  return (
    <svg width={width} height={height * scale}>
      <rect fill={backgroundColor} width="100%" height="100%" />
      {icon && (
        <svg
          fill={fontColor}
          width={widthIcon * scale}
          height={heightIcon * scale}
          textAnchor="middle"
          dominantBaseline="middle"
          x="15%"
          y={(height * scale - heightIcon * scale) / 2}
        >
          {icon}
        </svg>
      )}
      <g
        textAnchor="middle"
        dominantBaseline="middle"
        fill={fontColor}
        style={{ transform: `translate(${icon ? "65%" : "50%"}, 50%)` }}
      >
        {Object.keys(lines).map((key, i) => {
          const length = Object.keys(lines).length;
          if (lines[key]) {
            return (
              <text
                ref={(ref) => ref && handleFontSize(ref.getBBox(), key)}
                fontSize={fontSizes[key] * scale}
                y={getY(length, i)}
                fontFamily={fontFamily}
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
