import { useEffect, useState } from "react";
import { appName } from "../constants/constants";

interface HelmetConfig {
  withAppName?: boolean;
  connector?: string;
}

type Title = string;

const generateTitle = (title: Title, config: HelmetConfig) => {
  const { withAppName = false, connector = " - " } = config;

  if (!title.length) {
    return appName;
  }

  if (!withAppName) {
    return title;
  }

  return `${appName}${connector}${title}`;
};

type UseHelmet = (providedTitle: Title, config?: HelmetConfig) => void;

const useHelmet: UseHelmet = (
  providedTitle,
  config = { withAppName: false, connector: " - " }
) => {
  const [title] = useState(generateTitle(providedTitle, config));

  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useHelmet;
