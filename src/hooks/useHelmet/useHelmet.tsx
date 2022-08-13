import { useEffect, useState } from "react";
import { appName } from "../../constants/constants";

//*************************************
// TYPES
//*************************************

export interface HelmetConfig {
  withAppName?: boolean;
  connector?: string;
}

export type HelmetTitle = string;

//*************************************
// CONFIG
//*************************************

export const initialConfig = { withAppName: false, connector: " - " };

//*************************************
// generateTitle
//*************************************

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

//*************************************
// useHelmet
//*************************************

export type UseHelmet = (
  providedTitle: HelmetTitle,
  config?: HelmetConfig
) => void;

export const useHelmet: UseHelmet = (providedTitle, config = initialConfig) => {
  const [title] = useState(generateTitle(providedTitle, config));

  useEffect(() => {
    document.title = title;
  }, [title]);
};
