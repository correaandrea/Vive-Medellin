import { render, screen } from "@testing-library/react";
import Text from "./index";

describe("Text Component", () => {
  it("renders text with correct content", () => {
    // 🟣 Arrange
    const textContent = "Hello, World!";

    // 🟣 Act
    render(<Text>{textContent}</Text>);

    // 🟣 Assert
    const textElement = screen.getByText(textContent);
    expect(textElement).toBeInTheDocument();
  });

  it("applies custom classes if provided", () => {
    const customClasses = "custom-class";
    render(<Text classes={customClasses}>Styled Text</Text>);

    const textElement = screen.getByText("Styled Text");
    expect(textElement).toHaveClass(customClasses);
  });
});
