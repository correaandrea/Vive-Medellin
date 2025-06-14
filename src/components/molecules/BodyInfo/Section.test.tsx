import { render, screen } from "@testing-library/react";
import Section from "./index";

describe("Section component", () => {
  const mockTitle = "Test Title";
  const mockInfo = "This is some test info text.";
  const mockClasses = "custom-class";

  it("renders the title correctly", () => {
    render(<Section title={mockTitle} info={mockInfo} />);
    const titleElement = screen.getByText(mockTitle);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName.toLowerCase()).toBe("h1");
  });

  it("renders the info text correctly", () => {
    render(<Section title={mockTitle} info={mockInfo} />);
    const infoElement = screen.getByText(mockInfo);
    expect(infoElement).toBeInTheDocument();
    expect(infoElement.tagName.toLowerCase()).toBe("h3");
  });

  it("applies custom classes to the container", () => {
    render(<Section title={mockTitle} info={mockInfo} classes={mockClasses} />);
    const container = screen.getByText(mockTitle).parentElement;
    expect(container).toHaveClass(mockClasses);
  });
});
