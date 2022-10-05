import { render, screen } from "@testing-library/react";
import { List } from "./index";

// TODO write tests about setting correct classes and properties

describe("List", () => {
  const testId = "list";

  it("should render the component", () => {
    render(<List dataTestId={testId}></List>);
    expect(screen.getByTestId(testId)).toHaveClass("list");
  });

  it("should render  <ul/>", () => {
    render(<List tag={"ul"} dataTestId={testId}></List>);
    expect(screen.getByTestId(testId)).toHaveClass("ul");
  });

  it("should render  <ol/>", () => {
    render(<List tag={"ol"} dataTestId={testId}></List>);
    expect(screen.getByTestId(testId)).toHaveClass("ol");
  });

  it("should render  <dl/>", () => {
    render(<List tag={"dl"} dataTestId={testId}></List>);
    expect(screen.getByTestId(testId)).toHaveClass("dl");
  });
});
