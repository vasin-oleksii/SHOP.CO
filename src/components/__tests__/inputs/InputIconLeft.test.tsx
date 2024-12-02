import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import InputIconLeft from "../../common/inputs/InputIconLeft";

describe("input-icon-left", () => {
  test("renders input with correct value", () => {
    render(
      <InputIconLeft
        valueInput="Test value"
        onChange={() => {}}
        placeholder="Test value"
      >
        Search
      </InputIconLeft>
    );
    expect(screen.getByDisplayValue("Test value"));
    expect(screen.getByText("Search"));
    const input = screen.getByPlaceholderText("Test value");
    expect(input).toHaveValue("Test value");
  });

  test("renders input with correct placeholder", () => {
    render(
      <InputIconLeft
        valueInput="Test value"
        onChange={() => {}}
        placeholder="Search here"
      >
        🔍
      </InputIconLeft>
    );
    const input = screen.getByPlaceholderText("Search here");
    expect(input).toBeInTheDocument();
  });

  test("renders button icon correctly", () => {
    render(
      <InputIconLeft
        valueInput="Test value"
        onChange={() => {}}
        placeholder="Search here"
      >
        Search
      </InputIconLeft>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Search");
  });

  test("applies custom background and colorInput", () => {
    render(
      <InputIconLeft
        valueInput="Test value"
        onChange={() => {}}
        placeholder="Custom styles"
        bgInput="lightgray"
        colorInput="blue"
      >
        🔍
      </InputIconLeft>
    );
    const input = screen.getByPlaceholderText("Custom styles");
    expect(input).toHaveStyle("background: lightgray");
    expect(input).toHaveStyle("color: blue");
  });

  test("renders with maxWidth and display props", () => {
    render(
      <InputIconLeft
        valueInput="Test value"
        onChange={() => {}}
        placeholder="Max width test"
        maxWidth="500px"
        display="flex"
      >
        🔍
      </InputIconLeft>
    );
    const inputGroup =
      screen.getByPlaceholderText("Max width test").parentElement;
    expect(inputGroup).toHaveStyle("max-width: 500px");
    expect(inputGroup).toHaveStyle("display: flex");
  });
});
