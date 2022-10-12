// import { render, screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import { Cite } from "./index";

// TODO write tests about setting correct classes and properties

describe("Cite", () => {
  const testId = "cite";

  it("should render the component", () => {
    render(
      <Cite
        dataTestId={testId}
        url={"https://www.google.pl"}
        source={"Google"}
      />
    );
    // expect(screen.getByTestId(testId)).toHaveClass("cite");
  });
});
