import { render, screen } from "@testing-library/react";
import { Typography } from "./index";

// TODO write tests about setting correct classes and properties

describe("Typography", () => {
  it("should render the component", () => {
    const testId = "box";
    render(<Typography dataTestId={testId}></Typography>);
    expect(screen.getByTestId(testId)).toHaveClass("typography");
  });
});
