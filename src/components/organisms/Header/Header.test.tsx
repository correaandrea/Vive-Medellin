import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./index";

// Mockeamos NavTitle e Icon para que no interfieran en el test
jest.mock("../../atoms/NavTitle/index", () => {
  return function MockNavTitle(props: {
    title: string;
    link: string;
    classes?: string;
  }) {
    return (
      <a data-testid="mock-navtitle" href={props.link}>
        {props.title}
      </a>
    );
  };
});

jest.mock("../../atoms/Icon/index", () => {
  return function MockIcon(props: {
    icon: string;
    classes?: string;
    onClick?: () => void;
  }) {
    return (
      <svg data-testid={`mock-icon-${props.icon}`} onClick={props.onClick}>
        {props.icon}
      </svg>
    );
  };
});

describe("Header component", () => {
  it("renders nav with correct classes", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass(
      "flex flex-row items-start justify-between bg-white shadow-md h-36 w-full px-4"
    );
  });

  it("renders the logo image with correct src and alt", () => {
    render(<Header />);
    const logo = screen.getByAltText("Logo Vive Medellín") as HTMLImageElement;
    expect(logo).toBeInTheDocument();
    expect(logo.src).toContain("/Logo-ViveMedellin.png");
  });

  it("renders the desktop NavTitles (mocked)", () => {
    render(<Header />);
    const navTitles = screen.getAllByTestId("mock-navtitle");
    // Dos NavTitle en desktop
    expect(navTitles.length).toBeGreaterThanOrEqual(2);
    expect(navTitles[0]).toHaveTextContent("Iniciar sesión");
    expect(navTitles[1]).toHaveTextContent("Registrarse");
  });

  it("toggles the mobile menu when user icon is clicked", () => {
    render(<Header />);

    // Al inicio no hay menú móvil
    expect(screen.queryByText("Iniciar sesión")).toBeInTheDocument(); // desktop NavTitle
    // Los de mobile NO están renderizados porque el menú está oculto
    expect(screen.queryAllByTestId("mock-navtitle").length).toBe(2);

    // Click al icono user-circle
    const userIcon = screen.getByTestId("mock-icon-iconoir:user-circle");
    fireEvent.click(userIcon);

    // Ahora el menú móvil debe aparecer (sumar dos NavTitle más)
    expect(screen.getAllByTestId("mock-navtitle").length).toBe(4);

    // Click de nuevo para cerrarlo
    fireEvent.click(userIcon);
    expect(screen.getAllByTestId("mock-navtitle").length).toBe(2);
  });
});
