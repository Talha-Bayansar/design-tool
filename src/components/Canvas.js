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
    backgroundSvg,
  } = props;

  const getY = (length, i) => {
    if (length === 1) return 0;
    else if (length === 2) return `${-20 + 40 * i}%`;
    else if (length === 3) return `${-25 + 25 * i}%`;
    else if (length === 4) return `${-30 + 22.5 * i}%`;
    else return 0;
  };

  const handleFontSize = (box, key) => {
    const maxWidth = width * 0.5;
    const newEmSize = maxWidth / box.width;
    if (newEmSize < 1) {
      setFontSizes({
        ...fontSizes,
        [key]: fontSizes[key] * newEmSize,
      });
    }
  };

  return (
    <svg width={width} height={height * scale}>
      <rect fill={backgroundColor} width="100%" height="100%" rx="15" />
      {backgroundSvg && (
        <g id="BACKGROUND">
          <defs>
            <path
              id="SVGID_1_"
              d={`M 0 0 H ${width} V ${height * scale} H 0 L 0 0`}
            />
          </defs>
          <clipPath id="SVGID_00000007411319959583004010000002298349094845270932_">
            <use xlinkHref="#SVGID_1_" overflow="visible" />
          </clipPath>
          <g clipPath="url(#SVGID_00000007411319959583004010000002298349094845270932_)">
            {backgroundSvg}
          </g>
        </g>
      )}
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
