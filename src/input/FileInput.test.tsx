import React from "react";
import { render } from "@testing-library/react";
import FileInput from "./FileInput";
import StoreProvider from "../store";

test("should file input", () => {
  const { container } = render(
    <StoreProvider>
      <FileInput />
    </StoreProvider>
  );

  const input = container.querySelector("input[type='file']");
  expect(input).toBeTruthy();
});
