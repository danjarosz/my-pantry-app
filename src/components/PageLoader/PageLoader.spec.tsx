import { render, screen } from "@testing-library/react";
import PageLoader from "./PageLoader";

describe("PageLoader", () => {
  it("should render Spinner", () => {
    render(<PageLoader />);
    expect(screen.getByTestId("spinner")).toBeVisible();
  });
});
