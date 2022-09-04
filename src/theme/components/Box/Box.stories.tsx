import React from "react";
import { ComponentMeta } from "@storybook/react";
import Box from "./Box";

export default {
  title: "Theme/Box",
  component: Box,
} as ComponentMeta<typeof Box>;

export const Primary = () => {
  return <Box></Box>;
};
