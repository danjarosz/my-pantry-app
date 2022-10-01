import { render, screen } from "@testing-library/react";
import { Box } from "./index";

// TODO write tests about setting correct classes and properties

describe("Box", () => {
  it("should render the component", () => {
    const testId = "box";
    render(<Box dataTestId={testId}></Box>);
    expect(screen.getByTestId(testId)).toHaveClass("box");
  });
});
