import { render, screen } from "@testing-library/react";
import { Link } from "./index";

// TODO write tests about setting correct classes and properties

describe("Link", () => {
  const testId = "link";
  const url = "http://www.google.pl";

  it("should render the component", () => {
    render(<Link dataTestId={testId} url={url}></Link>);
    expect(screen.getByTestId(testId)).toHaveClass("link");
  });
});
