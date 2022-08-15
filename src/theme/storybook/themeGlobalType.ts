import { Theme } from "../types";

const themeGlobalType = {
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
};

export default themeGlobalType;
