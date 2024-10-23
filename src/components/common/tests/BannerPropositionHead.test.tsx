import { render, screen, fireEvent } from "@testing-library/react";
import BannerPropositionHead from "../BannerPropositionHead";

const mockToggleBanner = jest.fn();

describe("BannerPropositionHead", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders correctly when isVisible is true", () => {
    render(
      <BannerPropositionHead
        title="Test Title"
        buttonText="Test Button"
        isVisible={true}
        bg="blue.500"
        color="white"
        toggleBanner={mockToggleBanner}
      />
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  test("does not render when isVisible is false", () => {
    const { container } = render(
      <BannerPropositionHead
        title="Test Title"
        buttonText="Test Button"
        isVisible={false}
        bg="blue.500"
        color="white"
        toggleBanner={mockToggleBanner}
      />
    );

    expect(container).toBeEmptyDOMElement();
  });

  test("displays correct title and button text", () => {
    render(
      <BannerPropositionHead
        title="My Banner"
        buttonText="Click Me"
        isVisible={true}
        bg="green.500"
        color="black"
        toggleBanner={mockToggleBanner}
      />
    );

    expect(screen.getByText("My Banner")).toBeInTheDocument();
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("calls toggleBanner when close button is clicked", () => {
    render(
      <BannerPropositionHead
        title="Close Me"
        buttonText="Close"
        isVisible={true}
        bg="red.500"
        color="white"
        toggleBanner={mockToggleBanner}
      />
    );

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    expect(mockToggleBanner).toHaveBeenCalledTimes(1);
  });

  test("applies additional styling props correctly", () => {
    const { container } = render(
      <BannerPropositionHead
        title="Styled Banner"
        buttonText="Style Me"
        isVisible={true}
        bg="yellow.500"
        color="black"
        toggleBanner={mockToggleBanner}
        borderWidth="1px"
        borderColor="gray.300"
      />
    );

    expect(container.firstChild).toHaveStyle("border-width: 1px");
    expect(container.firstChild).toHaveStyle("border-color: gray.300");
  });
});
