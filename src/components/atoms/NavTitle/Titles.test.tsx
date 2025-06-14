import { render, screen } from "@testing-library/react";
import Titles from "./index";
import "@testing-library/jest-dom";

// Mocking the Icon component to avoid rendering actual icons during tests
jest.mock("../Icon/index", () => {
  const MockIcon = (props: { icon: string }) => (
    <svg data-testid="icon" data-icon={props.icon} />
  );
  MockIcon.displayName = "MockIcon";
  return MockIcon;
});

describe("Titles Component", () => {
  it("renders title with correct text and class", () => {
    const title = "Hello World";
    const titleClasses = "title-class";
    render(<Titles title={title} link="/home" titleClasses={titleClasses} />);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass(titleClasses);
  });

  it("renders Link with correct href", () => {
    const link = "/home";
    render(<Titles title="My Title" link={link} />);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", link);
  });

  it("renders Icon if iconName is provided", () => {
    const iconName = "mdi:home";
    render(<Titles title="My Title" link="/home" iconName={iconName} />);

    const iconElement = screen.getByTestId("icon");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute("data-icon", iconName);
  });

  it("does not render Icon if iconName is not provided", () => {
    render(<Titles title="My Title" link="/home" />);

    const iconElement = screen.queryByTestId("icon");
    expect(iconElement).not.toBeInTheDocument();
  });

  it("applies custom classes to container div", () => {
    const classes = "container-class";
    render(<Titles title="My Title" link="/home" classes={classes} />);

    const divElement = screen.getByRole("link").firstChild as HTMLElement;
    expect(divElement).toHaveClass(classes);
  });
});
