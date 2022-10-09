import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Link } from "./index";

export default {
  title: "Theme/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

// TODO add some examples of usage
// TODO write docs (https://storybook.js.org/docs/react/writing-docs/introduction)

export const Paragraph = () => {
  return <Link url={"https://www.google.pl"}>Link text</Link>;
};
