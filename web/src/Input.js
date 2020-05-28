import React from "react";

const Input = ({ value, setValue }) => {
  return (
    <div>
      <h2>Input</h2>
      <textarea
        cols="80"
        rows="20"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default Input;
