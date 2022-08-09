import type { FC } from "react";
import { useContext } from "react";
import { LocalizationContext } from "../../locale/utility";

const PantriesPage: FC = () => {
  const { t } = useContext(LocalizationContext);

  return (
    <div>
      <h1>{t("pantries_page_title")}</h1>
    </div>
  );
};

export default PantriesPage;
