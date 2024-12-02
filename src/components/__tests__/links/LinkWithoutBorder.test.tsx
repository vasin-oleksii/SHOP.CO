import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LinkWithoutBorder from "../../common/links/LinkWithoutBorder";

describe("link-without-border", () => {
  test("renders with correct text", () => {
    render(<LinkWithoutBorder>Test Link</LinkWithoutBorder>);
    const link = screen.getByText("Test Link");
    expect(link).toBeInTheDocument();
  });

  test("applies underline text decoration by default", () => {
    render(<LinkWithoutBorder>Test Link</LinkWithoutBorder>);
    const link = screen.getByText("Test Link");
    expect(link).toHaveStyle("text-decoration: none");
  });

  test("applies correct styles on hover", () => {
    render(<LinkWithoutBorder>Hover Link</LinkWithoutBorder>);
    const link = screen.getByText("Hover Link");

    fireEvent.mouseOver(link);

    expect(link).toHaveStyle("text-decoration: none");
    expect(link).toHaveStyle("color: greyText");
  });

  test("renders with default href value", () => {
    render(<LinkWithoutBorder>Link with Default Href</LinkWithoutBorder>);
    const link = screen.getByText("Link with Default Href");
    expect(link).toHaveAttribute("href", "#");
  });

  test("renders with custom href value", () => {
    render(
      <LinkWithoutBorder href="www.google.com">
        Link to Google
      </LinkWithoutBorder>
    );
    const link = screen.getByText("Link to Google");
    expect(link).toHaveAttribute("href", "www.google.com");
  });
});
