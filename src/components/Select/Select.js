import React from "react";
import "./Select.css";

const Select = ({
  selectedColor,
  list,
  idStart,
  onClick,
  setSelectedInputChildren,
  selectedInput,
  setSelectedInput,
  label,
  selectedIconImg,
  selectedFontFamily,
}) => {
  const handleClickSelect = () => {
    if (selectedInput === idStart) {
      setSelectedInput(null);
      setSelectedInputChildren(null);
    }
    if (selectedInput !== idStart) {
      setSelectedInput(idStart);
      setSelectedInputChildren(
        <div className="select_content">
          <div className="select_colors">
            {idStart === "icon"
              ? list.map((item, i) => (
                  <img
                    key={i}
                    className="select_color my-1"
                    src={item.img}
                    onClick={() => onClick(item.img, item.svg)}
                    id={`${idStart}_${i}`}
                  />
                ))
              : idStart === "fontFamily"
              ? list.map((font, i) => (
                  <div
                    key={i}
                    onClick={onClick}
                    className="mx-2 my-1 border rounded"
                    style={{ cursor: "pointer", fontFamily: font }}
                    id={font}
                  >
                    {font}
                  </div>
                ))
              : list.map((color, i) => (
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
      );
    }
  };

  return (
    <label className="d-flex flex-column align-items-start mx-1">
      {label}
      <div className="d-flex flex-column align-items-center">
        <div className="select_container" onClick={handleClickSelect}>
          {idStart === "icon" ? (
            <img src={selectedIconImg} className="m-2" width={20} height={20} />
          ) : idStart === "fontFamily" ? (
            <div className="m-2 border rounded">{selectedFontFamily}</div>
          ) : (
            <div
              className="select_color"
              style={{ backgroundColor: selectedColor }}
            />
          )}

          <span className="m-2">↓</span>
        </div>
        {selectedInput === idStart && (
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
    </label>
  );
};

export default Select;
