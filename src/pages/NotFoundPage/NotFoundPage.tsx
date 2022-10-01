import type { FC } from "react";
import { useMemo } from "react";
import { useTranslation } from "../../localization";
import { useHelmet } from "../../hooks";
import { Box } from "../../theme/components/Box";
import { Typography } from "../../theme/components/Typography";

const NotFoundPage: FC = () => {
  const { t } = useTranslation();
  const pageTitle = useMemo(() => t("not_found_page_title"), [t]);
  useHelmet(pageTitle, {
    withAppName: true,
  });
  return (
    <Box tag={"main"}>
      <Typography tag={"h1"}>{pageTitle}</Typography>
    </Box>
  );
};

export default NotFoundPage;
