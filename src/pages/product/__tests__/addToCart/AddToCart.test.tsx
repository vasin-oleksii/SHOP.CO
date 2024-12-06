import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import AddToCart from "../../addToCart/AddToCart";
describe("AddToCart Component", () => {
  test("renders initial number of goods", () => {
    render(<AddToCart />);
    expect(screen.getByText("1")).toBeInTheDocument();
  });
  test("increments the number of goods", () => {
    render(<AddToCart />);
    const incrementBtn = screen.getByText("+");
    fireEvent.click(incrementBtn);
    expect(screen.getByText("2")).toBeInTheDocument();
  });
  test("does not decrement below 1", () => {
    render(<AddToCart />);
    const decrementButton = screen.getByText("-");
    fireEvent.click(decrementButton);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("displays alert on adding to cart", () => {
    global.alert = jest.fn();
    render(<AddToCart />);
    const addToCartButton = screen.getByText("Add to Cart");
    fireEvent.click(addToCartButton);
    expect(global.alert).toHaveBeenCalledWith("is added: 1");
  });

  test("correctly handles increment and alert", () => {
    global.alert = jest.fn();
    render(<AddToCart />);
    const incrementButton = screen.getByText("+");
    const addToCartButton = screen.getByText("Add to Cart");
    fireEvent.click(incrementButton);
    fireEvent.click(addToCartButton);
    expect(global.alert).toHaveBeenCalledWith("is added: 2");
  });
});
