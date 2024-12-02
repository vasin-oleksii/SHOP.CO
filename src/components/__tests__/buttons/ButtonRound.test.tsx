import "@testing-library/jest-dom";
import React from "react";
import ButtonRound from "../../common/buttons/ButtonRound";
import { render, screen, fireEvent } from "@testing-library/react";

describe("ButtonRound", () => {
  test("render text in the Button", () => {
    render(<ButtonRound colorBtn="white">Test</ButtonRound>);
    expect(screen.getByTestId("ButtonRound")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("Handle click", () => {
    const handleClick = jest.fn();
    render(
      <ButtonRound colorBtn="black" onClick={handleClick}>
        Handle click
      </ButtonRound>
    );
    const button = screen.getByText("Handle click");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("changes style on hover", () => {
    render(<ButtonRound colorBtn="white">Hover me</ButtonRound>);
    const button = screen.getByText("Hover me");
    fireEvent.mouseOver(button);
    expect(button).toHaveStyle("background: black");
    expect(button).toHaveStyle("color: white");
    expect(button).toHaveStyle("border: 1px solid white");
  });

  test("Over action", () => {
    const handleClick = jest.fn();
    render(
      <ButtonRound colorBtn="white" onMouseOver={handleClick}>
        Over me
      </ButtonRound>
    );
    const button = screen.getByText("Over me");
    fireEvent.mouseOver(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
