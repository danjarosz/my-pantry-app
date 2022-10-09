import { render, screen } from "@testing-library/react";
import { DescriptionListItem } from "./index";

// TODO write tests about setting correct classes and properties

describe("ListItem", () => {
  const testId = "list-item";

  it("should render the component", () => {
    render(
      <DescriptionListItem
        dataTestId={testId}
        title="title"
        description={"title is title"}
      />
    );
    expect(screen.getByTestId(testId)).toHaveClass("description-list-item");
  });
});
