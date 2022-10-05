import React from "react";
import { ComponentMeta } from "@storybook/react";
import { List } from "./index";
import { ListItem } from "../ListItem";

export default {
  title: "Theme/List",
  component: List,
} as ComponentMeta<typeof List>;

// TODO add some examples of usage
// TODO write docs (https://storybook.js.org/docs/react/writing-docs/introduction)

export const Default = () => {
  return (
    <List>
      <ListItem>One</ListItem>
    </List>
  );
};
