import React from "react";

const TextForm = ({ onSubmit, onChange, line1, line2, line3, lineCount }) => {
  const lines = [line1, line2, line3];
  return (
    <form onSubmit={onSubmit}>
      {lines.map((line, i) => {
        if (i < lineCount)
          return (
            <div key={i} className="form-group">
              <label>Lijn {i + 1}</label>
              <input
                type="text"
                className="form-control"
                id={`line${i}`}
                maxLength="15"
                value={line}
                onChange={onChange}
              />
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
