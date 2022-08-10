import { useEffect, useState } from "react";
import { appName } from "../../constants/constants";

export const initialConfig = { withAppName: false, connector: " - " };

interface HelmetConfig {
  withAppName?: boolean;
  connector?: string;
}

type Title = string;

export const generateTitle = (title: Title, config: HelmetConfig) => {
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

type UseHelmet = (providedTitle: Title, config?: HelmetConfig) => void;

const useHelmet: UseHelmet = (providedTitle, config = initialConfig) => {
  const [title] = useState(generateTitle(providedTitle, config));

  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useHelmet;
