import React from "react";

const RadioOption = ({ label, checkedValue, onChange, group }) => {
  const value = label.toLowerCase();
  return (
    <>
      <input
        type="radio"
        value={value}
        onChange={onChange}
        id={value}
        name={group}
        checked={checkedValue === value}
      />
      <label htmlFor={value}>{label}</label>
    </>
  );
};

export default RadioOption;
