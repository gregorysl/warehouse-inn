import React, { useContext } from "react";
import { StoreContext } from "../store";

const TextInput = () => {
  const { text, setText } = useContext(StoreContext);
  return (
    <textarea
      cols="80"
      rows="20"
      value={text}
      onChange={(e) => setText(e.target.value)}
      type="text"
    />
  );
};

export default TextInput;
