import React from "react";

interface RadioProps {
  label: string;
  checkedValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  group: string;
}

const RadioOption = ({ label, checkedValue, onChange, group }: RadioProps) => {
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
