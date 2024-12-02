import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import DividerCustom from "../../common/divider/DividerCustom";

test("render in the DOM", () => {
  render(<DividerCustom />);
  expect(screen.getByTestId("divider")).toBeInTheDocument();
});
