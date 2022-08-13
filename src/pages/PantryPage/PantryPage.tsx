import type { FC } from "react";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "../../locale/utility";
import { useHelmet } from "../../hooks";

const PantryPage: FC = () => {
  const { t } = useTranslation();
  const { pantryUuid } = useParams();
  const pageTitle = useMemo(() => t("pantry_page_title"), [t]);
  useHelmet(`${pageTitle} ${pantryUuid}`, {
    withAppName: true,
  });

  return (
    <div>
      <h1>
        <span>{pageTitle}</span>: <span>{pantryUuid}</span>
      </h1>
    </div>
  );
};

export default PantryPage;
