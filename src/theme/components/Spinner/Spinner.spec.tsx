import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner", () => {
  const testId = "spinner";

  it("should render spinner with default classes", () => {
    render(<Spinner testId={testId} />);
    expect(screen.getByTestId(testId)).toHaveClass("spinner");
    expect(screen.getByTestId(testId)).toHaveClass("medium");
  });

  it("should render small spinner with correct classes", () => {
    render(<Spinner testId={testId} variant="small" />);
    expect(screen.getByTestId(testId)).toHaveClass("spinner");
    expect(screen.getByTestId(testId)).toHaveClass("small");
  });

  it("should render medium spinner with correct classes", () => {
    render(<Spinner testId={testId} variant="medium" />);
    expect(screen.getByTestId(testId)).toHaveClass("spinner");
    expect(screen.getByTestId(testId)).toHaveClass("medium");
  });

  it("should render large spinner with correct classes", () => {
    render(<Spinner testId={testId} variant="large" />);
    expect(screen.getByTestId(testId)).toHaveClass("spinner");
    expect(screen.getByTestId(testId)).toHaveClass("large");
  });
});
