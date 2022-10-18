import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Tooltip } from "./index";

export default {
  title: "Theme/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

// TODO add some examples of usage
// TODO write docs (https://storybook.js.org/docs/react/writing-docs/introduction)

export const Default = () => {
  return <Tooltip>Lorem ipsum dolor sit amet.</Tooltip>;
};
