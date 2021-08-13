import React from "react";

const TextForm = ({ onSubmit, onChange, firstLine, secondLine }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Eerste lijn</label>
        <input
          type="text"
          className="form-control"
          id="line1"
          maxLength="15"
          value={firstLine}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label>Tweede lijn</label>
        <input
          type="text"
          className="form-control"
          id="line2"
          maxLength="15"
          value={secondLine}
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        In winkelwagen
      </button>
    </form>
  );
};

export default TextForm;
