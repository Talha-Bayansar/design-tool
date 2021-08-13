import React from "react";

const ColorRow = ({ text, colors, onClick, idStart, activeColor }) => {
  return (
    <>
      <span>{text}</span>
      <div className="d-flex my-1">
        {colors.map((color, i) => (
          <div
            key={i}
            className={`mr-2 border ${
              activeColor === color && "rounded-circle"
            }`}
            style={{
              backgroundColor: color,
              width: "30px",
              height: "30px",
            }}
            id={`${idStart}_${color}`}
            onClick={onClick}
          ></div>
        ))}
      </div>
    </>
  );
};

export default ColorRow;
