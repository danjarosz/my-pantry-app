import "../src/index.scss";
import { Theme } from "../src/theme/types/theme";
import ThemeProvider from "../src/theme/components/ThemeProvider/ThemeProvider";
import { StoryContext, StoryFn } from "@storybook/react";
import { useCallback, useEffect, useState } from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: Theme.light,
    toolbar: {
      icon: "circlehollow",
      // Array of plain string values or MenuItem shape (see below)
      items: [Theme.light, Theme.dark],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

// Function to obtain the intended theme
const getTheme = (themeName: Theme) => {
  return themeName || Theme.light;
};

const withThemeProvider = (Story: StoryFn, context: StoryContext) => {
  const generateId = useCallback(() => {
    return `${Math.random()}`;
  }, []);

  const theme = getTheme(context.globals.theme);
  const [id, setId] = useState(generateId());

  useEffect(() => {
    localStorage.setItem("theme", theme);
    setId(generateId);
  }, [theme]);

  return (
    <ThemeProvider key={id} theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
