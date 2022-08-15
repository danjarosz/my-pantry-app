import type { FC, ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
import { Theme } from "../../types";
import { themeStorageKey } from "../../constants";
import { ThemeContext, SwitchTheme } from "../../context/ThemeContext";

export interface ThemeProviderProps {
  children?: ReactNode;
  theme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children, theme: initialTheme = Theme.light } = props;

  const [theme, setTheme] = useState(initialTheme);

  const changeTheme = useCallback((theme: Theme) => {
    setTheme(theme);
    localStorage.setItem(themeStorageKey, theme);

    const root = document.querySelector(":root") as HTMLElement;
    root.setAttribute("color-scheme", `${theme}`);
  }, []);

  const getCurrentTheme = useCallback(() => {
    let theme = window.matchMedia(`(prefers-color-scheme: ${Theme.dark})`)
      .matches
      ? Theme.dark
      : Theme.light;

    const themeFormLocalStorage = localStorage.getItem(themeStorageKey);

    if (
      themeFormLocalStorage === Theme.light ||
      themeFormLocalStorage === Theme.dark
    ) {
      changeTheme(themeFormLocalStorage);
    } else {
      changeTheme(theme);
    }
  }, [changeTheme]);

  const switchTheme = useCallback<SwitchTheme>(() => {
    changeTheme(theme === Theme.light ? Theme.dark : Theme.light);
  }, [changeTheme, theme]);

  useEffect(() => {
    getCurrentTheme();
  }, [getCurrentTheme]);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
