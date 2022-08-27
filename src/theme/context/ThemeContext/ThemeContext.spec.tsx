import { render, screen } from "@testing-library/react";
import { ThemeContext } from "./ThemeContext";
import { Theme } from "../../types";

describe("ThemeContext", () => {
  it("should return expected values", () => {
    const initialValues = {
      theme: Theme.light,
      switchTheme: () => {},
      changeTheme: (theme: Theme) => Theme.light,
    };

    render(
      <ThemeContext.Provider value={initialValues}>
        <ThemeContext.Consumer>
          {(value) => {
            const { theme, switchTheme, changeTheme } = value;

            expect(switchTheme).toEqual(initialValues.switchTheme);
            expect(changeTheme).toEqual(initialValues.changeTheme);

            return (
              <>
                <div data-testid="theme">{theme}</div>
              </>
            );
          }}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    );

    expect(screen.getByTestId("theme")).toHaveTextContent(initialValues.theme);
  });
});
