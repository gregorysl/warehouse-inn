import React, { createContext, useState } from "react";

export const StoreContext = createContext();

export const FakeStoreProvider = ({ children, text, setText }) => (
  <StoreContext.Provider
    value={{
      text,
      setText,
    }}
  >
    {children}
  </StoreContext.Provider>
);

export default ({ children }) => {
  const [text, setText] = useState("");

  const store = {
    text,
    setText,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
