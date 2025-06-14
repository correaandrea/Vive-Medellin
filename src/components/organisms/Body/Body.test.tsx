import { render, screen } from "@testing-library/react";
import Body from "./index";

// Mock de Section (BodyInfo) para test unitario
jest.mock("../../molecules/BodyInfo/index", () => {
  return function MockSection(props: {
    title: string;
    info: string;
    classes?: string;
  }) {
    return (
      <div data-testid="mock-section" data-classes={props.classes}>
        <p data-testid="section-title">{props.title}</p>
        <p data-testid="section-info">{props.info}</p>
      </div>
    );
  };
});

describe("Body component", () => {
  it("renders the nav container with correct classes", () => {
    render(<Body />);
    const navElement = screen.getByRole("navigation");
    expect(navElement).toHaveClass(
      "flex flex-col lg:flex-row justify-around gap-4"
    );
  });
  it("renders the Section (mocked)", () => {
    render(<Body />);
    const section = screen.getByTestId("mock-section");
    expect(section).toBeInTheDocument();
  });

  it("renders the image with correct src and alt", () => {
    render(<Body />);
    const img = screen.getByAltText("Imagen carousel 1") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain("/Carousel1.png");
    expect(img).toHaveClass("h-full w-full object-cover shadow-md");
  });
});
