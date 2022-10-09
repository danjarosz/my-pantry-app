import { render, screen } from "@testing-library/react";
import { DescriptionList } from "./index";

// TODO write tests about setting correct classes and properties

describe("DescriptionList", () => {
  const testId = "description-list";

  it("should render the component", () => {
    render(<DescriptionList dataTestId={testId}></DescriptionList>);
    expect(screen.getByTestId(testId)).toHaveClass("description-list");
  });
});
