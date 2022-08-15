import type { HelmetConfig, HelmetTitle } from "../types";
import { appName } from "../../../constants/constants";
import { initialConfig } from "../constants/config";

export type GenerateTitle = (
  title: HelmetTitle,
  config: HelmetConfig
) => string;

export const generateTitle: GenerateTitle = (title, config) => {
  const {
    withAppName = initialConfig.withAppName,
    connector = initialConfig.connector,
  } = config;

  if (!title.length) {
    return appName;
  }

  if (!withAppName) {
    return title;
  }

  return `${appName}${connector}${title}`;
};
