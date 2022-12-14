import React from "react";
import { ComponentMeta } from "@storybook/react";
import Box from "./Box";

export default {
  title: "Theme/Box",
  component: Box,
} as ComponentMeta<typeof Box>;

// TODO add some examples of usage
// TODO write docs (https://storybook.js.org/docs/react/writing-docs/introduction)

export const Default = () => {
  return (
    <Box
      tag={"aside"}
      dataTestId={"root"}
      height="200px"
      width="300px"
      // overflow={"scroll"}
      // overflowX="scroll"
      // overflowY="hidden"
      // display="flex"
    >
      <Box
        style={{
          backgroundColor: "teal",
          width: "400px",
          height: "300px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        eleifend elit a ultrices tempus. Fusce massa est, viverra a dolor quis,
        tincidunt gravida mi. Proin feugiat consequat justo in efficitur. Nam
        scelerisque, massa eget faucibus lacinia, ex lacus varius nibh, vel
        tempus tellus justo a leo. Sed non consectetur urna. Vivamus a pulvinar
        enim, egestas tempor arcu. Ut a diam gravida, finibus dui quis, volutpat
        nibh. Curabitur congue, risus nec eleifend blandit, ipsum erat convallis
        tellus, ac faucibus arcu velit quis odio. Pellentesque laoreet, lacus eu
        fringilla dignissim, sem sem condimentum risus, at rhoncus massa metus
        vitae tortor. Duis tincidunt metus sapien, ut auctor felis interdum sed.
        Suspendisse felis eros, laoreet vel augue eget, vehicula dignissim
        felis. Vestibulum sed velit rhoncus neque dictum laoreet quis ac dolor.
        Mauris mauris elit, porta vel maximus et, pharetra sed tortor. In auctor
        aliquet pharetra. Fusce eu turpis lacinia, tristique ipsum eget, dapibus
        diam. Morbi pharetra lorem ac dolor bibendum, sit amet congue ante
        tincidunt. Praesent a erat ac nibh consequat ornare semper ac nisi.
        Mauris ac tincidunt sapien. Donec ac sem tristique, aliquet massa
        volutpat, ornare quam. Fusce eu tempor nunc. Maecenas varius mattis
        dignissim. Vestibulum ullamcorper finibus sem, eget porttitor libero
        egestas quis. Donec vulputate et tortor id maximus. In posuere
        condimentum nulla eget sollicitudin. Curabitur blandit nunc sed est
        tempor finibus.
      </Box>
    </Box>
  );
};
