import { Theme } from "../types";
import { StoryContext, StoryFn } from "@storybook/react";
import { useCallback, useEffect, useState } from "react";
import { themeStorageKey } from "../constants";
import { ThemeProvider } from "../components/ThemeProvider";

const getTheme = (themeName: Theme) => {
  return themeName || Theme.light;
};

const useThemeProvider = (Story: StoryFn, context: StoryContext) => {
  const generateId = useCallback(() => {
    return `${Math.random()}`;
  }, []);

  const theme = getTheme(context.globals.theme);
  const [id, setId] = useState(generateId());

  useEffect(() => {
    localStorage.setItem(themeStorageKey, theme);
    setId(generateId);
  }, [generateId, theme]);

  return (
    <ThemeProvider key={id} theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};

export default useThemeProvider;
