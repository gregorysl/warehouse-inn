import React from "react";
import { render } from "@testing-library/react";
import OutputPanel from "./OutputPanel";
import { FakeStoreProvider } from "./store";

test("should render empty textarea", () => {
  const { container } = render(
    <FakeStoreProvider text="test" setText={(e) => console.log(e)}>
      <OutputPanel />
    </FakeStoreProvider>
  );
  const textarea = container.querySelector("textarea");
  expect(textarea).toBeTruthy();
  expect(textarea).toHaveProperty("value", "");
});

test("should have value in textarea for valid example", () => {
  const { container } = render(
    <FakeStoreProvider
      text="test;test;warehouse,1"
      setText={(e) => console.log(e)}
    >
      <OutputPanel />
    </FakeStoreProvider>
  );
  const textarea = container.querySelector("textarea");
  expect(textarea).toBeTruthy();
  expect(textarea).toHaveProperty("value", "warehouse (total: 1)\ntest: 1\n");
});
