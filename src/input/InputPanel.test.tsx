import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputPanel from "./InputPanel";
import { FakeStoreProvider } from "../store";

test("should h2 tag with Input text", () => {
  render(
    <FakeStoreProvider text="test" setText={(e) => console.log(e)}>
      <InputPanel />
    </FakeStoreProvider>
  );
  const h2 = screen.getByText("Input");
  expect(h2).toBeTruthy();
});

test("should render two radio buttons", () => {
  render(
    <FakeStoreProvider text="test" setText={(e) => console.log(e)}>
      <InputPanel />
    </FakeStoreProvider>
  );
  const radios = screen.getAllByRole("radio");
  const fileRadio = screen.getByText("File");
  const textRadio = screen.getByText("Text");

  expect(radios.length).toBe(2);
  expect(fileRadio).toBeTruthy();
  expect(textRadio).toBeTruthy();
});

test("should have text radio selected and input with value", () => {
  render(
    <FakeStoreProvider text="test" setText={(e) => console.log(e)}>
      <InputPanel />
    </FakeStoreProvider>
  );

  const radio = screen.getByRole("radio", { name: "Text" });
  expect(radio).toBeTruthy();
  expect(radio).toHaveProperty("checked", true);
});

test("should have file input checked after click", () => {
  const { container } = render(
    <FakeStoreProvider text="test" setText={(e) => console.log(e)}>
      <InputPanel />
    </FakeStoreProvider>
  );

  const radio = screen.getByRole("radio", { name: "File" });
  expect(radio).toBeTruthy();
  expect(radio).toHaveProperty("checked", false);
  fireEvent.click(radio);
  expect(radio).toHaveProperty("checked", true);
  const input = container.querySelector("input[type='file']");
  expect(input).toBeTruthy();
});
