import type { FC } from "react";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "../../localization";
import { useHelmet } from "../../hooks";
import { Box } from "../../theme/components/Box";
import { Typography } from "../../theme/components/Typography";

const PantryPage: FC = () => {
  const { t } = useTranslation();
  const { pantryUuid } = useParams();
  const pageTitle = useMemo(() => t("pantry_page_title"), [t]);
  useHelmet(`${pageTitle} ${pantryUuid}`, {
    withAppName: true,
  });

  return (
    <Box tag={"main"}>
      <Typography tag={"h1"}>
        <>
          <Typography tag="span">{pageTitle}</Typography>:
          <Typography tag="span"> </Typography>
          <Typography tag="span">{pantryUuid}</Typography>
        </>
      </Typography>
    </Box>
  );
};

export default PantryPage;
