import { classSelector } from "../../helpers";
import type { FC } from "react";
import type { Children } from "../../types";
import { useMemo } from "react";
import classes from "./Typography.module.scss";

export interface TypographyProps {
  children?: Children;
  tag?: "p";
  dataCy?: string;
  dataTestId?: string;
  style?: {
    [prop: string]: any;
  };
}

// TODO Develop this component

const Typography: FC<TypographyProps> = (props) => {
  const { tag = "p", dataCy, dataTestId, style, children } = props;

  const params = useMemo(
    () => ({
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([classes.typography]),
      style: {
        ...style,
      },
    }),
    []
  );

  switch (tag) {
    case "p":
      return <p {...params}>{children}</p>;
    default:
      return <p {...params}>{children}</p>;
  }
};

export default Typography;
