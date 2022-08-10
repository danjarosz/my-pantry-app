import type { FC } from "react";
import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { LocalizationContext } from "../../locale/utility";
import useHelmet from "../../hooks/useHelmet";

const PantryPage: FC = () => {
  const { t } = useContext(LocalizationContext);
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
