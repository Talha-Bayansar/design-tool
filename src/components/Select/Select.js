import React, { useState } from "react";
import "./Select.css";

const Select = ({ activeColor, colors, idStart, handleClick, label }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="d-flex flex-column mb-3">
      <div
        className={`select_container ${
          isSelected && "active_select_container"
        }`}
        onClick={handleSelectClick}
      >
        <div
          className="select_color"
          style={{ backgroundColor: activeColor }}
        ></div>
        <span className="mx-2">{label}</span>
      </div>
      {isSelected && (
        <div className="select_content">
          <div className="select_colors">
            {/* {colors.map((color, i) => (
              <div
                key={i}
                onClick={handleClick}
                className="select_color my-1"
                id={`${idStart}_${color}`}
                style={{ backgroundColor: color }}
              ></div>
            ))} */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
