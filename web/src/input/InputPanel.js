import React, { useState } from "react";
import FileInput from "./FileInput";
import TextInput from "./TextInput";
import RadioOption from "./RadioOption";

const getInputType = (checkedValue) => {
  switch (checkedValue) {
    case "file":
      return <FileInput />;
    case "text":
      return <TextInput />;
    default:
      console.log("Option unavailable");
  }
};

const Input = () => {
  const [checkedValue, setCheckedValue] = useState("text");
  const inputComponent = getInputType(checkedValue);
  return (
    <div>
      <h2>Input</h2>

      <div>
        <RadioOption
          label="Text"
          checkedValue={checkedValue}
          onChange={(e) => setCheckedValue(e.target.value)}
          group="input-type"
        />
        <RadioOption
          label="File"
          checkedValue={checkedValue}
          onChange={(e) => setCheckedValue(e.target.value)}
          group="input-type"
        />
      </div>
      {inputComponent}
    </div>
  );
};

export default Input;
