import React from "react";
import { render, screen } from "@testing-library/react";
import RadioOption from "./RadioOption";

test("should render checked radio button with label ", () => {
  render(
    <RadioOption
      label="Test"
      checkedValue="test"
      onChange={(e) => null}
      group=""
    />
  );
  const label = screen.getByText("Test");
  expect(label).toBeTruthy();

  const radio = screen.getByRole("radio", { value: "test", checked: true });
  expect(radio).toBeTruthy();
});

test("should render unchecked radio button with label ", () => {
  render(
    <RadioOption
      label="Test"
      checkedValue="other"
      onChange={(e) => null}
      group=""
    />
  );
  const label = screen.getByText("Test");
  expect(label).toBeTruthy();

  const radio = screen.getByRole("radio", { value: "test", checked: true });
  expect(radio).toBeTruthy();
});
