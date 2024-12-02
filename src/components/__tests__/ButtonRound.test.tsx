import "@testing-library/jest-dom";
import React from "react";
import ButtonRound from "../common/buttons/ButtonRound";
import { render, screen } from "@testing-library/react";

describe("ButtonRound", () => {
  test("render text in the Button", () => {
    render(<ButtonRound colorBtn="white">Test Button</ButtonRound>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });
});
