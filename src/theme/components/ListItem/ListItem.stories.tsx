import React from "react";
import { ComponentMeta } from "@storybook/react";
import { ListItem } from "../ListItem";

export default {
  title: "Theme/ListItem",
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

// TODO add some examples of usage
// TODO write docs (https://storybook.js.org/docs/react/writing-docs/introduction)

export const Default = () => {
  return <ListItem>Element</ListItem>;
};
