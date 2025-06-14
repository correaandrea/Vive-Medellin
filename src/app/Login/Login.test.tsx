import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./page";

// Mocks de los componentes atómicos con displayName
jest.mock("../../components/atoms/Footer/index", () => {
  const MockFooter = () => <div data-testid="mock-footer" />;
  MockFooter.displayName = "MockFooter";
  return MockFooter;
});

jest.mock("../../components/atoms/Icon/index", () => {
  const MockIcon = (props: { icon: string; classes: string }) => (
    <svg data-testid="mock-icon">{props.icon}</svg>
  );
  MockIcon.displayName = "MockIcon";
  return MockIcon;
});

jest.mock("../../components/atoms/NavTitle/index", () => {
  return function MockNavTitle(props: { title: string; link: string }) {
    return (
      <a data-testid="mock-navtitle" href={props.link}>
        {props.title}
      </a>
    );
  };
});

jest.mock("../../components/atoms/Text/index", () => {
  const MockText = (props: { children: React.ReactNode; classes: string }) => (
    <p data-testid="mock-text">{props.children}</p>
  );
  MockText.displayName = "MockText";
  return MockText;
});

jest.mock("../../components/atoms/TextBox/index", () => {
  const MockTextBox = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input data-testid={`mock-textbox-${props.name}`} {...props} />
  );
  MockTextBox.displayName = "MockTextBox";
  return MockTextBox;
});

jest.mock("../../components/atoms/Button/index", () => {
  const MockButton = (props: { children: React.ReactNode }) => (
    <button data-testid="mock-button">{props.children}</button>
  );
  MockButton.displayName = "MockButton";
  return MockButton;
});

describe("Login screen", () => {
  it("renders layout elements correctly", () => {
    render(<Login />);

    expect(screen.getByTestId("mock-icon")).toHaveTextContent(
      "mingcute:menu-fill"
    );

    expect(screen.getAllByTestId("mock-navtitle")).toHaveLength(2);
    expect(screen.getByAltText("Logo Vive Medellín")).toBeInTheDocument();
    expect(screen.getByTestId("mock-footer")).toBeInTheDocument();
  });

  it("renders the form with two inputs and a button", () => {
    render(<Login />);

    expect(screen.getByTestId("mock-textbox-email")).toBeInTheDocument();
    expect(screen.getByTestId("mock-textbox-password")).toBeInTheDocument();
    expect(screen.getByTestId("mock-button")).toHaveTextContent(
      "Iniciar sesión"
    );
  });

  it("allows typing in email and password inputs", () => {
    render(<Login />);

    const emailInput = screen.getByTestId(
      "mock-textbox-email"
    ) as HTMLInputElement;
    const passwordInput = screen.getByTestId(
      "mock-textbox-password"
    ) as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
  });
});
