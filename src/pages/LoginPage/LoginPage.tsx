import type { FC } from "react";
import { useMemo } from "react";
import { useTranslation } from "../../locale/utility";
import useHelmet from "../../hooks/useHelmet/useHelmet";

const LoginPage: FC = () => {
  const { t } = useTranslation();
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
