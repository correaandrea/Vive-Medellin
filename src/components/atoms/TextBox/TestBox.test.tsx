import { render, screen, fireEvent } from "@testing-library/react";
import TextBox from "./index";

describe("TextBox Component", () => {
  // 🟣 Arrange
  const baseProps = {
    name: "username",
    value: "",
    onChange: jest.fn(),
    placeholder: "Enter username",
    type: "text",
    className: "custom-class",
  };

  beforeEach(() => {
    baseProps.onChange.mockClear(); // Limpia el mock antes de cada prueba
  });

  it("renders with correct props", () => {
    render(<TextBox {...baseProps} />);

    const input = screen.getByPlaceholderText("Enter username");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("name", baseProps.name);
    expect(input).toHaveAttribute("type", baseProps.type);
    expect(input).toHaveClass(baseProps.className);
  });

  it("calls onChange when value changes", () => {
    render(<TextBox {...baseProps} />);

    const input = screen.getByPlaceholderText("Enter username");

    fireEvent.change(input, { target: { value: "newuser" } });

    expect(baseProps.onChange).toHaveBeenCalledTimes(1);
  });

  it("renders without optional props", () => {
    const minimalProps = {
      name: "email",
      value: "",
      onChange: jest.fn(),
    };

    render(<TextBox {...minimalProps} />);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("name", "email");
  });
});
