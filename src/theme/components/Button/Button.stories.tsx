import React from "react";
import { ComponentMeta } from "@storybook/react";
import Button from "./Button";
import { useTranslation } from "../../../locale/utility";

export default {
  title: "Theme/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary = () => {
  const { t } = useTranslation();
  return <Button>{t("example_button")}</Button>;
};
