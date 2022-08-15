import "../src/theme/styles/index.scss";
import { Theme } from "../src/theme/types/theme";
import ThemeProvider, {
  themeStorageKey,
} from "../src/theme/components/ThemeProvider/ThemeProvider";
import { StoryContext, StoryFn } from "@storybook/react";
import { useCallback, useEffect, useState } from "react";
import { Lang } from "../src/localization/translations/locale";
import {
  langStorageKey,
  LocalizationProvider,
} from "../src/localization/utility/utility";

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
  lang: {
    name: "Lang",
    description: "App localization",
    defaultValue: Lang.en,
    toolbar: {
      icon: "circlehollow",
      items: [Lang.en, Lang.pl],
      showName: true,
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
    localStorage.setItem(themeStorageKey, theme);
    setId(generateId);
  }, [theme]);

  return (
    <ThemeProvider key={id} theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};

const getLang = (langName: Lang) => {
  return langName || Lang.en;
};

const withLocalization = (Story: StoryFn, context: StoryContext) => {
  const generateId = useCallback(() => {
    return `${Math.random()}`;
  }, []);

  const lang = getLang(context.globals.lang);
  const [id, setId] = useState(generateId());

  useEffect(() => {
    localStorage.setItem(langStorageKey, lang);
    setId(generateId);
  }, [lang]);

  return (
    <LocalizationProvider key={id} initialLang={lang}>
      <Story {...context} />
    </LocalizationProvider>
  );
};

export const decorators = [withThemeProvider, withLocalization];
