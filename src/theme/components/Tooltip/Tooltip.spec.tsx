import { render, screen } from "@testing-library/react";
import { Tooltip } from "./index";

// TODO write tests about setting correct classes and properties

describe("Typography", () => {
  const testId = "tooltip";

  it("should render the component", () => {
    render(<Tooltip dataTestId={testId}></Tooltip>);
    expect(screen.getByTestId(testId)).toHaveClass("tooltip");
  });
});
