import React from "react";
import { render, screen } from "@testing-library/react";
import Register from "./page";

jest.mock("../../components/atoms/Footer/index", () => {
  const MockFooter = () => <div data-testid="mock-footer" />;
  MockFooter.displayName = "MockFooter";
  return MockFooter;
});

jest.mock("../../components/atoms/Icon/index", () => {
  const MockIcon = (props: { icon: string; classes: string }) => (
    <svg data-testid={`mock-icon-${props.icon}`}>{props.icon}</svg>
  );
  MockIcon.displayName = "MockIcon";
  return MockIcon;
});

jest.mock("../../components/atoms/NavTitle/index", () => {
  const MockNavTitle = (props: {
    title: string;
    link: string;
    classes: string;
  }) => (
    <a data-testid={`mock-navtitle-${props.title}`} href={props.link}>
      {props.title}
    </a>
  );
  MockNavTitle.displayName = "MockNavTitle";
  return MockNavTitle;
});

jest.mock("../../components/atoms/Text/index", () => {
  const MockText = (props: { children: React.ReactNode; classes: string }) => (
    <p data-testid="mock-text">{props.children}</p>
  );
  MockText.displayName = "MockText";
  return MockText;
});

jest.mock("../../components/atoms/Button/index", () => {
  const MockButton = (props: { children: React.ReactNode }) => (
    <button data-testid="mock-button">{props.children}</button>
  );
  MockButton.displayName = "MockButton";
  return MockButton;
});

describe("Register screen", () => {
  it("renders all expected elements", () => {
    render(<Register />);

    // Icon
    expect(
      screen.getByTestId("mock-icon-mingcute:menu-fill")
    ).toBeInTheDocument();

    // NavTitle regresar
    expect(screen.getByTestId("mock-navtitle-Regresar")).toBeInTheDocument();

    // Text "Registrarse"
    expect(screen.getAllByTestId("mock-text")).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ textContent: "Registrarse" }),
      ])
    );

    // NavTitle Iniciar sesión
    expect(
      screen.getByTestId("mock-navtitle-Iniciar sesión")
    ).toBeInTheDocument();

    // Text "¿Ya tienes una cuenta?"
    expect(screen.getAllByTestId("mock-text")).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ textContent: "¿Ya tienes una cuenta?" }),
      ])
    );

    // Text "Terminos y condiciones"
    expect(screen.getAllByTestId("mock-text")).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ textContent: "Terminos y condiciones" }),
      ])
    );

    // Button
    expect(screen.getByTestId("mock-button")).toHaveTextContent("Crear cuenta");

    // Footer
    expect(screen.getByTestId("mock-footer")).toBeInTheDocument();
  });
});
