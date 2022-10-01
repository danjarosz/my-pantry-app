import type { FC } from "react";
import { useMemo } from "react";
import { useTranslation } from "../../localization";
import { useHelmet } from "../../hooks";
import { Typography } from "../../theme/components/Typography";

const PantriesPage: FC = () => {
  const { t } = useTranslation();
  const pageTitle = useMemo(() => t("pantries_page_title"), [t]);
  useHelmet(pageTitle, {
    withAppName: true,
  });

  return (
    <div>
      <Typography tag={"h1"}>{pageTitle}</Typography>
    </div>
  );
};

export default PantriesPage;
