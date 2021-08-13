import React from "react";
import ScaleText from "react-scale-text";

const Canvas = (props) => {
  const { color, backgroundColor, line1, line2, logo } = props;
  return (
    <div
      className="d-flex justify-content-center align-items-center h-100 w-100 px-5"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {logo && <div>Logo</div>}
      {(line1 || line2) && (
        <ScaleText>
          <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
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
          </div>
        </ScaleText>
      )}
    </div>
  );
};

export default Canvas;
