import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  const testId = "btn";

  it("should render the component", () => {
    render(<Button dataTestId={testId}>Button text</Button>);

    expect(screen.getByTestId(testId)).toHaveClass("button");
  });
});
