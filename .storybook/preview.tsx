import "../src/theme/styles/index.scss";
import {
  localeDecorator,
  localeGlobalType,
} from "../src/localization/storybook";
import { themeDecorator, themeGlobalType } from "../src/theme/storybook";

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
  theme: themeGlobalType,
  lang: localeGlobalType,
};

export const decorators = [themeDecorator, localeDecorator];
