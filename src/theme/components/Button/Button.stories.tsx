import React from "react";
import { Args, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Layout/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template = (args: Args) => <Button>example button</Button>;

export const Primary = Template.bind({});
// Primary.args = {};
