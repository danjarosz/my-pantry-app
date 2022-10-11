import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Quotation } from "./index";
import { Typography } from "../Typography";

export default {
  title: "Theme/Quotation",
  component: Quotation,
} as ComponentMeta<typeof Quotation>;

// TODO add some examples of usage
// TODO write docs (https://storybook.js.org/docs/react/writing-docs/introduction)

export const q = () => {
  return (
    <>
      <Typography tag={"span"}>Start.</Typography>
      <Quotation tag={"q"} cite={"http://www.google.pl"}>
        <Typography tag={"span"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Quotation>
      <Typography tag={"span"}>End.</Typography>
    </>
  );
};

export const blockquote = () => {
  return (
    <>
      <Typography tag={"span"}>Start.</Typography>
      <Quotation tag={"blockquote"} cite={"http://www.google.pl"}>
        <Typography tag={"span"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Quotation>
      <Typography tag={"span"}>End.</Typography>
    </>
  );
};
