import React, { createContext, useState } from "react";

export const StoreContext = createContext<ContextValue>({
  text: "",
  setText: (e) => {},
});

export const FakeStoreProvider = ({
  children,
  text,
  setText,
}: ContextValue & Props) => (
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

export type ContextValue = undefined | StoreProps;

export default ({ children }: Props) => {
  const [text, setText] = useState("");

  const store: ContextValue = {
    text,
    setText,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
