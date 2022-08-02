import type { FC, ReactNode } from "react";
import { createContext, useCallback, useEffect, useState } from "react";
import { Theme } from "../../types/theme";

type SwitchTheme = () => void;

interface ThemeContextValue {
  theme: Theme;
  switchTheme: SwitchTheme;
}

const defaultThemeContextValue = {
  theme: Theme.light,
  switchTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextValue>(
  defaultThemeContextValue
);

interface ThemeProviderProps {
  children?: ReactNode;
  theme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children, theme: initialTheme = Theme.light } = props;

  const [theme, setTheme] = useState(initialTheme);

  const changeTheme = useCallback((theme: Theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);

    const root = document.querySelector(":root") as HTMLElement;
    root.setAttribute("color-scheme", `${theme}`);
  }, []);

  const getCurrentTheme = useCallback(() => {
    let theme = window.matchMedia(`(prefers-color-scheme: ${Theme.dark})`)
      .matches
      ? Theme.dark
      : Theme.light;

    const themeFormLocalStorage = localStorage.getItem("theme");

    if (
      themeFormLocalStorage === Theme.light ||
      themeFormLocalStorage === Theme.dark
    ) {
      changeTheme(themeFormLocalStorage);
    } else {
      changeTheme(theme);
    }
  }, [changeTheme]);

  const switchTheme = useCallback(() => {
    changeTheme(theme === Theme.light ? Theme.dark : Theme.light);
  }, [changeTheme, theme]);

  useEffect(() => {
    getCurrentTheme();
  }, [getCurrentTheme]);

  return (
    <div>
      <ThemeContext.Provider value={{ theme, switchTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
