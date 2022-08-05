import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import PageLoader from "./PageLoader";

export default {
  title: "Components/PageLoader",
  component: PageLoader,
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => (
  <PageLoader {...args} />
);

export const Loader = Template.bind({});
