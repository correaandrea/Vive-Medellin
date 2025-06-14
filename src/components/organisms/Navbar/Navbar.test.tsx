import { render, screen } from "@testing-library/react";
import Navbar from "./index";

// Mock NavTitle para que no dependa de su implementación
jest.mock("../../atoms/NavTitle/index", () => {
  return function MockNavTitle(props: { title: string; link: string }) {
    return (
      <a data-testid="mock-navtitle" href={props.link}>
        {props.title}
      </a>
    );
  };
});

describe("Navbar component", () => {
  it("renders the nav with correct classes", () => {
    render(<Navbar />);
    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass(
      "flex flex-col lg:flex-row items-center justify-around bg-secondary h-[150px] lg:h-[46px] w-full shadow-md mb-2"
    );
  });

  it("renders three NavTitle (mocked) components with correct titles and links", () => {
    render(<Navbar />);
    const navTitles = screen.getAllByTestId("mock-navtitle");
    expect(navTitles).toHaveLength(3);

    expect(navTitles[0]).toHaveTextContent("Eventos y Actividades");
    expect(navTitles[0]).toHaveAttribute("href", "/EventosYactividades");

    expect(navTitles[1]).toHaveTextContent("Comunidades");
    expect(navTitles[1]).toHaveAttribute("href", "/Comunidades");

    expect(navTitles[2]).toHaveTextContent("Valoraciones");
    expect(navTitles[2]).toHaveAttribute("href", "/Valoraciones");
  });
});
