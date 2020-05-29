import React from "react";
import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";
import { FakeStoreProvider } from "../store";

test("should render textarea with value", () => {
  const { container } = render(
    <FakeStoreProvider text="test">
      <TextInput />
    </FakeStoreProvider>
  );
  const textarea = container.querySelector("textarea");
  expect(textarea).toBeTruthy();

  const textareaValue = screen.getByDisplayValue("test");
  expect(textareaValue).toBeTruthy();
});
