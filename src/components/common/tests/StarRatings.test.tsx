import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import StarRatings from "../StarRatings";
import star from "../../assets/stars/star.svg";
import starHalf from "../../assets/stars/starHalf.svg";

describe("StarRatings Component", () => {
  it("renders the correct number of full stars based on the rating", () => {
    render(<StarRatings rating={3} />);
    const fullStars = screen.getAllByAltText("star");
    expect(fullStars.length).toBe(3);
    fullStars.forEach((img) => {
      expect(img).toHaveAttribute("src", star);
    });
  });

  it("renders a half star if the rating is not an integer", () => {
    render(<StarRatings rating={2.5} />);
    const fullStars = screen.getAllByAltText("star");
    expect(fullStars.length).toBe(3);
    expect(fullStars[0]).toHaveAttribute("src", star);
    expect(fullStars[1]).toHaveAttribute("src", star);
    expect(fullStars[2]).toHaveAttribute("src", starHalf);
  });

  it("renders the rating with a maximum value if ratingMax is provided", () => {
    render(<StarRatings rating={4} ratingMax={5} />);
    const ratingText = screen.getByText("4 / 5");
    expect(ratingText).toBeInTheDocument();
  });

  it("renders stars with correct size when starBig prop is true", () => {
    render(<StarRatings rating={2} starBig={true} />);
    const stars = screen.getAllByAltText("star");
    stars.forEach((img) => {
      expect(img).toHaveStyle({ width: "20px" });
    });
  });

  it("renders stars with default size when starBig prop is false", () => {
    render(<StarRatings rating={2} starBig={false} />);
    const stars = screen.getAllByAltText("star");
    stars.forEach((img) => {
      expect(img).toHaveStyle({ width: "15px" });
    });
  });

  it("renders stars with default size when starBig prop is not provided", () => {
    render(<StarRatings rating={2} />);
    const stars = screen.getAllByAltText("star");
    stars.forEach((img) => {
      expect(img).toHaveStyle({ width: "15px" });
    });
  });
});
