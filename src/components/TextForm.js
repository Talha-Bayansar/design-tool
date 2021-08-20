import React from "react";

const TextForm = ({
  lines,
  onSubmit,
  onChange,
  onClickIncrement,
  onClickDecrement,
}) => {
  return (
    <form
      className="d-flex flex-column align-items-center align-items-md-start"
      onSubmit={onSubmit}
      onChange={onChange}
    >
      {Object.keys(lines).map((key, i) => (
        <div key={i} className="form-group">
          <label>Lijn {i + 1}</label>
          <div className="d-flex">
            <input
              type="text"
              className="form-control"
              id={key}
              // maxLength="15"
              // value={lines[key]}
            />
            <button
              type="button"
              className="px-3 ml-1 btn rounded"
              onClick={() => onClickDecrement(key)}
            >
              -
            </button>
            <button
              type="button"
              className="px-3 ml-1 btn rounded"
              onClick={() => onClickIncrement(key)}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <button type="submit" className="btn btn-primary">
        In winkelwagen
      </button>
    </form>
  );
};

export default TextForm;
