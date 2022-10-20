import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Typography } from "./index";

export default {
  title: "Theme/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

// TODO add some examples of usage
// TODO write docs (https://storybook.js.org/docs/react/writing-docs/introduction)

const longText =
  "      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend\n" +
  "      elit a ultrices tempus. Fusce massa est, viverra a dolor quis, tincidunt\n" +
  "      gravida mi. Proin feugiat consequat justo in efficitur. Nam scelerisque,\n" +
  "      massa eget faucibus lacinia, ex lacus varius nibh, vel tempus tellus justo\n" +
  "      a leo. Sed non consectetur urna. Vivamus a pulvinar enim, egestas tempor\n" +
  "      arcu. Ut a diam gravida, finibus dui quis, volutpat nibh.";

const shortText =
  "      Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

export const Default = () => {
  return <Typography>{longText}</Typography>;
};

export const Paragraph = () => {
  return <Typography tag={"p"}>{longText}</Typography>;
};

export const h1 = () => {
  return <Typography tag={"h1"}>{shortText}</Typography>;
};

export const h2 = () => {
  return <Typography tag={"h2"}>{shortText}</Typography>;
};

export const h3 = () => {
  return <Typography tag={"h3"}>{shortText}</Typography>;
};

export const h4 = () => {
  return <Typography tag={"h4"}>{shortText}</Typography>;
};

export const h5 = () => {
  return <Typography tag={"h5"}>{shortText}</Typography>;
};

export const h6 = () => {
  return <Typography tag={"h6"}>{longText}</Typography>;
};

export const span = () => {
  return <Typography tag={"span"}>{shortText}</Typography>;
};

export const em = () => {
  return (
    <Typography>
      Lorem ipsum <Typography tag={"em"}>dolor sit</Typography> amet,
      consectetur adipiscing elit.
    </Typography>
  );
};

export const i = () => {
  return (
    <Typography>
      Lorem ipsum <Typography tag={"i"}>dolor sit</Typography> amet, consectetur
      adipiscing elit.
    </Typography>
  );
};

// | "strong"
export const strong = () => {
  return (
    <Typography>
      Lorem ipsum <Typography tag={"strong"}>dolor sit</Typography> amet,
      consectetur adipiscing elit.
    </Typography>
  );
};

export const b = () => {
  return (
    <Typography>
      Lorem ipsum <Typography tag={"b"}>dolor sit</Typography> amet, consectetur
      adipiscing elit.
    </Typography>
  );
};

export const u = () => {
  return (
    <Typography>
      Lorem ipsum <Typography tag={"u"}>dolor sit</Typography> amet, consectetur
      adipiscing elit.
    </Typography>
  );
};
