import { Lang } from "../types";

const localeGlobalType = {
  name: "Lang",
  description: "App localization",
  defaultValue: Lang.en,
  toolbar: {
    icon: "circlehollow",
    items: [Lang.en, Lang.pl],
    showName: true,
    dynamicTitle: true,
  },
};

export default localeGlobalType;
