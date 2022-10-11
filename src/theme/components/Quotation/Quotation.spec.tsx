import { render, screen } from "@testing-library/react";
import { Quotation } from "./index";

// TODO write tests about setting correct classes and properties

describe("Quotation", () => {
  const testId = "quotation";
  const cite = "xyz";

  it("should render the component", () => {
    render(<Quotation dataTestId={testId} cite={cite}></Quotation>);
    expect(screen.getByTestId(testId)).toHaveClass("quotation");
  });

  it("should render  <q/>", () => {
    render(<Quotation dataTestId={testId} tag={"q"} cite={cite}></Quotation>);
    expect(screen.getByTestId(testId)).toHaveClass("q");
  });

  it("should render  <blockqoute/>", () => {
    render(
      <Quotation dataTestId={testId} tag={"blockquote"} cite={cite}></Quotation>
    );
    expect(screen.getByTestId(testId)).toHaveClass("blockquote");
  });
});
