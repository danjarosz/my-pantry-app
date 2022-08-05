import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Spinner from "./Spinner";

export default {
  title: "Theme/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Large = Template.bind({});
Large.args = { variant: "large" };

export const Medium = Template.bind({});
Medium.args = { variant: "medium" };

export const Small = Template.bind({});
Small.args = { variant: "small" };
