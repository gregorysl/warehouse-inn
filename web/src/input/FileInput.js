import React, { useContext } from "react";
import { StoreContext } from "../store";
import "./FileInput.css";

const FileInput = () => {
  const { setText } = useContext(StoreContext);
  const handleFileChange = (file) => {
    const fileReader = new FileReader();
    fileReader.onloadend = (e) => setText(fileReader.result);
    fileReader.readAsText(file);
  };
  return (
    <div className="file-input">
      <input
        type="file"
        accept=".csv,.txt"
        onChange={(e) => handleFileChange(e.target.files[0])}
      />
    </div>
  );
};

export default FileInput;
