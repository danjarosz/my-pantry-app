import { useMemo } from "react";
import { classSelector } from "../../helpers";
import { Box } from "../Box";
import { Typography } from "../Typography";
import type { FC, RefObject } from "react";
import type { Child } from "../../types";
import type { BoxProps } from "../Box";
import classes from "./Tooltip.module.scss";

export interface TooltipProps {
  children: Child;
  ref?: RefObject<any>;
  dataCy?: string;
  dataTestId?: string;
  style?: {
    wrapper: { [prop: string]: any };
    tooltip: { [prop: string]: any };
  };
  classNames?: {
    wrapper: string[];
    tooltip: string[];
  };
  title: string;
}

// TODO Develop this component

const Tooltip: FC<TooltipProps> = (props) => {
  const {
    children,
    ref,
    dataCy,
    dataTestId,
    style = {
      wrapper: {},
      tooltip: {},
    },
    classNames = {
      wrapper: [],
      tooltip: [],
    },
    title,
  } = props;

  const wrapperParams = useMemo<BoxProps>(
    () => ({
      ref,
      dataCy,
      dataTestId,
      classNames: [classes["tooltip-wrapper"], ...classNames.wrapper],
      style: style.wrapper,
      display: "inline-block",
    }),
    [ref, dataCy, dataTestId, style.wrapper, classNames]
  );

  const tooltipParams = useMemo<BoxProps>(
    () => ({
      style: style.tooltip,
      classNames: [classes["tooltip"], ...classNames.tooltip],
    }),
    [classNames.tooltip, style.tooltip]
  );

  return (
    <Box {...wrapperParams}>
      <Box {...tooltipParams}>
        <Typography>{title}</Typography>
      </Box>
      {children}
    </Box>
  );
};

export default Tooltip;
