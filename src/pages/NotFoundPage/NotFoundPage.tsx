import type { FC } from "react";
import { useMemo } from "react";
import { useTranslation } from "../../localization";
import { useHelmet } from "../../hooks";

const NotFoundPage: FC = () => {
  const { t } = useTranslation();
  const pageTitle = useMemo(() => t("not_found_page_title"), [t]);
  useHelmet(pageTitle, {
    withAppName: true,
  });
  return (
    <div>
      <h1>{pageTitle}</h1>
    </div>
  );
};

export default NotFoundPage;
