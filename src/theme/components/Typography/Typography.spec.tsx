import { render, screen } from "@testing-library/react";
import { Typography } from "./index";

// TODO write tests about setting correct classes and properties

describe("Typography", () => {
  const testId = "typography";

  it("should render the component", () => {
    render(<Typography dataTestId={testId}></Typography>);
    expect(screen.getByTestId(testId)).toHaveClass("typography");
  });

  it("should render  <p/>", () => {
    render(<Typography tag={"p"} dataTestId={testId}></Typography>);
    expect(screen.getByTestId(testId)).toHaveClass("p");
  });

  it("should render  <h1/>", () => {
    render(<Typography tag={"h1"} dataTestId={testId}></Typography>);
    expect(screen.getByTestId(testId)).toHaveClass("h1");
  });

  it("should render  <h2/>", () => {
    render(<Typography tag={"h2"} dataTestId={testId}></Typography>);
    expect(screen.getByTestId(testId)).toHaveClass("h2");
  });

  it("should render  <h3/>", () => {
    render(<Typography tag={"h3"} dataTestId={testId}></Typography>);
    expect(screen.getByTestId(testId)).toHaveClass("h3");
  });

  it("should render  <h4/>", () => {
    render(<Typography tag={"h4"} dataTestId={testId}></Typography>);
    expect(screen.getByTestId(testId)).toHaveClass("h4");
  });

  it("should render  <h5/>", () => {
    render(<Typography tag={"h5"} dataTestId={testId}></Typography>);
    expect(screen.getByTestId(testId)).toHaveClass("h5");
  });

  it("should render  <h6/>", () => {
    render(<Typography tag={"h6"} dataTestId={testId}></Typography>);
    expect(screen.getByTestId(testId)).toHaveClass("h6");
  });

  it("should render  <span/>", () => {
    render(<Typography tag={"span"} dataTestId={testId}></Typography>);
    expect(screen.getByTestId(testId)).toHaveClass("span");
  });

  it("should render  <em/>", () => {
    render(<Typography tag={"em"} dataTestId={testId}></Typography>);
    expect(screen.getByTestId(testId)).toHaveClass("em");
  });

  it("should render  <i/>", () => {
    render(<Typography tag={"i"} dataTestId={testId}></Typography>);
    expect(screen.getByTestId(testId)).toHaveClass("i");
  });

  it("should render  <strong/>", () => {
    render(<Typography tag={"strong"} dataTestId={testId}></Typography>);
    expect(screen.getByTestId(testId)).toHaveClass("strong");
  });

  it("should render  <b/>", () => {
    render(<Typography tag={"b"} dataTestId={testId}></Typography>);
    expect(screen.getByTestId(testId)).toHaveClass("b");
  });

  it("should render  <u/>", () => {
    render(<Typography tag={"u"} dataTestId={testId}></Typography>);
    expect(screen.getByTestId(testId)).toHaveClass("u");
  });

  it("should render  <abbr/>", () => {
    render(<Typography tag={"abbr"} dataTestId={testId}></Typography>);
    expect(screen.getByTestId(testId)).toHaveClass("abbr");
  });

  it("should render  <address/>", () => {
    render(<Typography tag={"address"} dataTestId={testId}></Typography>);
    expect(screen.getByTestId(testId)).toHaveClass("address");
  });

  it("should render  <sup/>", () => {
    render(<Typography tag={"sup"} dataTestId={testId}></Typography>);
    expect(screen.getByTestId(testId)).toHaveClass("sup");
  });

  it("should render  <sub/>", () => {
    render(<Typography tag={"sub"} dataTestId={testId}></Typography>);
    expect(screen.getByTestId(testId)).toHaveClass("sub");
  });
});
