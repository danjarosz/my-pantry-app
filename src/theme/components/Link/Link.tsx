import type { FC } from "react";
import { Children } from "../../types";
import { useMemo } from "react";
import { classSelector } from "../../helpers";
import classes from "./Link.module.scss";

export interface LinkProps {
  children?: Children;
  dataCy?: string;
  dataTestId?: string;
  url: string;
  style?: {
    [prop: string]: any;
  };
}

const Link: FC<LinkProps> = (props) => {
  const { children, dataCy, dataTestId, url, style } = props;

  const params = useMemo(
    () => ({
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([classes.link]),
      href: url,
      style: {
        ...style,
      },
    }),
    [dataCy, dataTestId, style, url]
  );

  return <a {...params}>{children}</a>;
};

export default Link;
