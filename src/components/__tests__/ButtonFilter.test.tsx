import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonFilter from "../common/buttons/ButtonFilter"; // Обновите путь, если он отличается

describe("ButtonFilter", () => {
  test("render text in the Button", () => {
    render(<ButtonFilter text="Test Button" />);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  test("(isBig=true)", () => {
    render(<ButtonFilter text="Big Button" isBig />);
    const button = screen.getByText("Big Button");
    expect(button).toHaveStyle("font-size: sm");
  });

  test("hover and active", () => {
    render(<ButtonFilter text="Hover Button" />);
    const button = screen.getByText("Hover Button");

    fireEvent.mouseOver(button);
    expect(button).toHaveStyle("color: white");

    fireEvent.mouseDown(button);
    expect(button).toHaveStyle("background: black");
    expect(button).toHaveStyle("color: white");
  });

  test("onClick ", async () => {
    const handleClick = jest.fn();
    render(<ButtonFilter text="Clickable Button" onClick={handleClick} />);
    const button = screen.getByText("Clickable Button");

    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  // test("применяет правильные стили, если кнопка активна (isActive=true)", () => {
  //   render(<ButtonFilter text="Active Button" isActive />);
  //   const button = screen.getByText("Active Button");

  //   expect(button).toHaveStyle("background: black");
  //   expect(button).toHaveStyle("color: white");
  // });
});
