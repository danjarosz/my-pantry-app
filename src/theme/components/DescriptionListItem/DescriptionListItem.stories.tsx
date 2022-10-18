import React from "react";
import { ComponentMeta } from "@storybook/react";
import { DescriptionListItem } from "./index";

export default {
  title: "Theme/DescriptionListItem",
  component: DescriptionListItem,
} as ComponentMeta<typeof DescriptionListItem>;

// TODO add some examples of usage
// TODO write docs (https://storybook.js.org/docs/react/writing-docs/introduction)

export const SingleDescription = () => {
  return (
    <DescriptionListItem
      title={"Single"}
      description={"The Single Onle description"}
    />
  );
};

export const MultiDescription = () => {
  return (
    <DescriptionListItem
      title={"Double"}
      description={["First description", "Second description"]}
    />
  );
};
