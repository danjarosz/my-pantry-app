import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Cite } from "./index";

export default {
  title: "Theme/Cite",
  component: Cite,
} as ComponentMeta<typeof Cite>;

// TODO add some examples of usage
// TODO write docs (https://storybook.js.org/docs/react/writing-docs/introduction)

export const Default = () => {
  return <Cite url={"https://www.google.pl"} source={"Google"} />;
};
