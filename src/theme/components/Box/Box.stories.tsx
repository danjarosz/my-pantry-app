import React from "react";
import { ComponentMeta } from "@storybook/react";
import Box from "./Box";

export default {
  title: "Theme/Box",
  component: Box,
} as ComponentMeta<typeof Box>;

export const Primary = () => {
  return (
    <Box height="200px" width="300px" overflowX="scroll" overflowY="visible">
      <div
        style={{
          backgroundColor: "teal",
          width: "400px",
          height: "300px",
        }}
      ></div>
    </Box>
  );
};
