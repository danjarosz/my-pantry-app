import type { FC } from "react";
import { useContext, useMemo } from "react";
import { LocalizationContext } from "../../locale/utility";
import useHelmet from "../../hooks/useHelmet";

const LoginPage: FC = () => {
  const { t } = useContext(LocalizationContext);
  const pageTitle = useMemo(() => t("login_page_title"), [t]);
  useHelmet(pageTitle, {
    withAppName: true,
  });

  return (
    <div>
      <h1>{pageTitle}</h1>
    </div>
  );
};

export default LoginPage;
