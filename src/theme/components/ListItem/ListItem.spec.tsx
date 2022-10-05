import { render, screen } from "@testing-library/react";
import { ListItem } from "./index";

// TODO write tests about setting correct classes and properties

describe("ListItem", () => {
  const testId = "list-item";

  it("should render the component", () => {
    render(<ListItem dataTestId={testId}></ListItem>);
    expect(screen.getByTestId(testId)).toHaveClass("list-item");
  });

  it("should render  <li/>", () => {
    render(<ListItem tag={"li"} dataTestId={testId}></ListItem>);
    expect(screen.getByTestId(testId)).toHaveClass("li");
  });

  it("should render  <dt/>", () => {
    render(<ListItem tag={"dt"} dataTestId={testId}></ListItem>);
    expect(screen.getByTestId(testId)).toHaveClass("dt");
  });

  it("should render  <dd/>", () => {
    render(<ListItem tag={"dd"} dataTestId={testId}></ListItem>);
    expect(screen.getByTestId(testId)).toHaveClass("dd");
  });
});
