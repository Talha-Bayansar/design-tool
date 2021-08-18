import React from "react";

const TextForm = ({
  onSubmit,
  onChange,
  line1,
  line2,
  line3,
  handleFontSizeScale1Change,
  handleFontSizeScale2Change,
  handleFontSizeScale3Change,
  lineCount,
}) => {
  const lines = [
    { line: line1, function: handleFontSizeScale1Change },
    { line: line2, function: handleFontSizeScale2Change },
    { line: line3, function: handleFontSizeScale3Change },
  ];
  return (
    <form
      className="d-flex flex-column align-items-center align-items-md-start"
      onSubmit={onSubmit}
    >
      {lines.map((line, i) => {
        if (i < lineCount)
          return (
            <div key={i} className="form-group">
              <label>Lijn {i + 1}</label>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control"
                  id={`line${i}`}
                  maxLength="15"
                  value={line.line}
                  onChange={onChange}
                />
                <button
                  type="button"
                  className="px-3 ml-1 btn rounded"
                  id="-"
                  onClick={line.function}
                >
                  -
                </button>
                <button
                  type="button"
                  className="px-3 ml-1 btn rounded"
                  id="+"
                  onClick={line.function}
                >
                  +
                </button>
              </div>
            </div>
          );
      })}
      <button type="submit" className="btn btn-primary">
        In winkelwagen
      </button>
    </form>
  );
};

export default TextForm;
