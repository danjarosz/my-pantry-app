import { useMemo } from "react";
import { classSelector } from "../../helpers";
import type { FC, RefObject } from "react";
import type { Child } from "../../types";
import classes from "./Tooltip.module.scss";
import { Box } from "../Box";

export interface TooltipProps {
  children: Child;
  ref?: RefObject<any>;
  dataCy?: string;
  dataTestId?: string;
  style?: {
    [prop: string]: any;
  };
  classNames?: string[];
  title: string;
}

// TODO Develop this component

const Tooltip: FC<TooltipProps> = (props) => {
  const {
    children,
    ref,
    dataCy,
    dataTestId,
    style,
    classNames = [],
    title,
  } = props;

  const params = useMemo(
    () => ({
      ref,
      dataCy,
      dataTestId,
      classNames: [classes.tooltip, ...classNames],
      style,
    }),
    [ref, dataCy, dataTestId, style, classNames]
  );

  return <Box {...params}>{children}</Box>;
};

export default Tooltip;
