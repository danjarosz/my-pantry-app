import type { FC } from "react";
import { useContext } from "react";
import { LocalizationContext } from "../../locale/utility";

const NotFoundPage: FC = () => {
  const { t } = useContext(LocalizationContext);
  return (
    <div>
      <h1>{t("not_found_page_title")}</h1>
    </div>
  );
};

export default NotFoundPage;
