import React from "react";
import { ComponentMeta } from "@storybook/react";
import { DescriptionList } from "./index";
import { DescriptionListItem } from "../DescriptionListItem";

export default {
  title: "Theme/DescriptionList",
  component: DescriptionList,
} as ComponentMeta<typeof DescriptionList>;

// TODO add some examples of usage
// TODO write docs (https://storybook.js.org/docs/react/writing-docs/introduction)

export const Default = () => {
  return (
    <DescriptionList>
      <DescriptionListItem title={"Title"} description={"Title is title"} />
      <DescriptionListItem
        title={"Second title"}
        description={"The description of the second item"}
      />
    </DescriptionList>
  );
};
