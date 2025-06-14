import { render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button Component", () => {
  it("renders with correct text", () => {
    // 🟣 Arrange
    const buttonText = "Click me";

    // 🟣 Act
    render(<Button>{buttonText}</Button>);

    // 🟣 Assert
    const buttonElement = screen.getByRole("button", { name: buttonText });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(buttonText);
  });

  it("has correct class names", () => {
    // 🟣 Arrange
    const buttonText = "Click me";

    // 🟣 Act
    render(<Button>{buttonText}</Button>);

    // 🟣 Assert
    const buttonElement = screen.getByRole("button", { name: buttonText });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("w-[300px]");
  });
});
