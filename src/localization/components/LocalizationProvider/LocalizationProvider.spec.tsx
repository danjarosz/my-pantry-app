import { LocalizationProvider } from "./LocalizationProvider";
import { render, screen } from "@testing-library/react";

describe("LocalizationProvider", () => {
  it("should render children", () => {
    render(
      <LocalizationProvider>
        <span>Text</span>
      </LocalizationProvider>
    );

    expect(screen.getByText("Text")).toHaveTextContent("Text");
  });
});
