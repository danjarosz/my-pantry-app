import { useMemo } from "react";
import { classSelector } from "../../helpers";
import type { FC } from "react";
import type { Children } from "../../types";
import classes from "./Tooltip.module.scss";
import { Box } from "../Box";

export interface TooltipProps {
  children?: Children;
  dataCy?: string;
  dataTestId?: string;
  style?: {
    [prop: string]: any;
  };
}

// TODO Develop this component

const Tooltip: FC<TooltipProps> = (props) => {
  const { dataCy, dataTestId, style, children } = props;

  const params = useMemo(
    () => ({
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([classes.tooltip]),
      style: {
        ...style,
      },
    }),
    [dataCy, dataTestId, style]
  );

  return <Box>{children}</Box>;
};

export default Tooltip;
