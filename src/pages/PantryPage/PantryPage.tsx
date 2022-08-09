import type { FC } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { LocalizationContext } from "../../locale/utility";

const PantryPage: FC = () => {
  const { t } = useContext(LocalizationContext);
  const params = useParams();

  return (
    <div>
      <h1>
        <span>{t("pantry_page_title")}</span>: <span>{params?.pantryUuid}</span>
      </h1>
    </div>
  );
};

export default PantryPage;
