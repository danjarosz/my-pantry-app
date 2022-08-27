import useTheme from "./useTheme";
import { renderHook } from "@testing-library/react";
import { defaultThemeContextValue } from "../../context/ThemeContext/ThemeContext";

describe("useTheme", () => {
  it("should return correct values", () => {
    const {
      result: {
        current: { theme, switchTheme, changeTheme },
      },
    } = renderHook(() => useTheme());

    expect(theme).toEqual(defaultThemeContextValue.theme);
    expect(switchTheme).not.toBeNull();
    expect(changeTheme).not.toBeNull();
  });
});
