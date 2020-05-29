import React, { useContext } from "react";
import { StoreContext } from "../store";
import "./FileInput.css";

const FileInput = () => {
  const { setText } = useContext(StoreContext);
  const handleFileChange = (list: FileList) => {
    if (list === null) return;
    const file = list[0];
    const fileReader = new FileReader();
    fileReader.onloadend = (e) => setText(fileReader.result as string);
    fileReader.readAsText(file);
  };
  return (
    <div className="file-input">
      <input
        type="file"
        accept=".csv,.txt"
        onChange={(e) => handleFileChange(e.target.files as FileList)}
      />
    </div>
  );
};

export default FileInput;
