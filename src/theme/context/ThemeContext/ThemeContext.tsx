import { Theme } from "../../types";
import { createContext } from "react";

export type SwitchTheme = () => void;

export type ChangeTheme = (theme: Theme) => Theme;

export interface ThemeContextValue {
  theme: Theme;
  switchTheme: SwitchTheme;
  changeTheme: ChangeTheme;
}

export const defaultThemeContextValue = {
  theme: Theme.light,
  switchTheme: () => {},
  changeTheme: (theme: Theme) => Theme.light,
};

export const ThemeContext = createContext<ThemeContextValue>(
  defaultThemeContextValue
);
