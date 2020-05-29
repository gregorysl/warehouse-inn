import React, { createContext, useState } from "react";

export const StoreContext = createContext<StoreProps>({
  text: "",
  setText: (e) => {},
});

export const FakeStoreProvider = ({
  children,
  text,
  setText,
}: StoreProps & Props) => (
  <StoreContext.Provider
    value={{
      text,
      setText,
    }}
  >
    {children}
  </StoreContext.Provider>
);
interface Props {
  children: React.ReactNode;
}

export interface StoreProps {
  text: string;
  setText: (value: string) => void;
}

export default ({ children }: Props) => {
  const [text, setText] = useState("");

  const store: StoreProps = {
    text,
    setText,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
