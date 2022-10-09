import { render, screen } from "@testing-library/react";
import { ListItem } from "./index";

// TODO write tests about setting correct classes and properties

describe("ListItem", () => {
  const testId = "list-item";

  it("should render the component", () => {
    render(<ListItem dataTestId={testId}></ListItem>);
    expect(screen.getByTestId(testId)).toHaveClass("list-item");
  });
});
