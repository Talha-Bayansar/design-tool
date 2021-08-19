import React, { useState } from "react";
import "./Select.css";

const Select = ({ selectedColor, colors, idStart, onClick, label }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClickSelect = () => {
    setIsSelected(!isSelected);
  };

  return (
    <label className="d-flex flex-column align-items-start mx-1">
      {label}
      <div className="d-flex flex-column align-items-center">
        <div className="select_container" onClick={handleClickSelect}>
          <div
            className="select_color"
            style={{ backgroundColor: selectedColor }}
          />
          <span className="m-2">↓</span>
        </div>
        {isSelected && (
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "lightgrey",
              clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
            }}
          />
        )}
      </div>
      {isSelected && (
        <div className="select_content">
          <div className="select_colors">
            {colors.map((color, i) => (
              <div
                key={i}
                onClick={onClick}
                className="select_color my-1"
                id={`${idStart}_${color}`}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>
      )}
    </label>
  );
};

export default Select;
