import { render, screen } from "@testing-library/react";
import Footer from "./index";
describe("Footer Component", () => {
  it("renders with correct text", () => {
    // 🟣 Arrange
    const footerText = "© 2025 ViveMedellín. Todos los derechos reservados.";

    // 🟣 Act
    render(<Footer />);

    // 🟣 Assert
    const footerElement = screen.getByText(footerText);
    expect(footerElement).toBeInTheDocument();
  });

  it("has correct class names", () => {
    // 🟣 Arrange
    const footerText = "© 2025 ViveMedellín. Todos los derechos reservados.";

    // 🟣 Act
    render(<Footer />);

    // 🟣 Assert
    const footerContainer = screen.getByText(footerText).parentElement;
    expect(footerContainer).toBeInTheDocument();
    expect(footerContainer).toHaveClass("text-white");
  });
});
