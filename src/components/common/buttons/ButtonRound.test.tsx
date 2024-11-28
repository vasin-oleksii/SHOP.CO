import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ButtonRound from "./ButtonRound";

describe("ButtonRound", () => {
  test("render text in the Button", () => {
    render(<ButtonRound colorBtn="white">Test Button</ButtonRound>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });
});
