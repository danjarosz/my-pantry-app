import { Theme } from "../../types";
import { createContext } from "react";

export type SwitchTheme = () => void;

export interface ThemeContextValue {
  theme: Theme;
  switchTheme: SwitchTheme;
}

export const defaultThemeContextValue = {
  theme: Theme.light,
  switchTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextValue>(
  defaultThemeContextValue
);
