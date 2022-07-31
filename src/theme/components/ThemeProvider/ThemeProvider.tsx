import type { FC, ReactNode } from "react";
import { createContext, useCallback, useEffect, useState } from "react";
import { Theme } from "../../types/theme";

interface ThemeContextValue {
  theme: Theme;
  changeTheme: ChangeTheme;
}

type ChangeTheme = (theme: Theme) => void;

const defaultThemeContextValue = {
  theme: Theme.light,
  changeTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextValue>(
  defaultThemeContextValue
);

interface ThemeProviderProps {
  children?: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children } = props;

  const [theme, setTheme] = useState(Theme.light);

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

  useEffect(() => {
    getCurrentTheme();
  }, [getCurrentTheme]);

  return (
    <div>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
