import { render, screen } from "@testing-library/react";
import { Tooltip } from "./index";
import { Button } from "../Button";

// TODO write tests about setting correct classes and properties

describe("Typography", () => {
  const testId = "tooltip";

  it("should render the component", () => {
    render(
      <Tooltip dataTestId={testId} title={"This is the tooltip message."}>
        <Button>Click me</Button>
      </Tooltip>
    );
    expect(screen.getByTestId(testId)).toHaveClass("tooltip-wrapper");
  });
});
