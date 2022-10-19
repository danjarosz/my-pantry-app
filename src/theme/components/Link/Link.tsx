import { useMemo } from "react";
import { classSelector } from "../../helpers";
import type { FC, RefObject } from "react";
import type { Children } from "../../types";
import classes from "./Link.module.scss";

export interface LinkProps {
  children?: Children;
  ref?: RefObject<any>;
  dataCy?: string;
  dataTestId?: string;
  url: string;
  style?: {
    [prop: string]: any;
  };
  classNames?: string[];
}

const Link: FC<LinkProps> = (props) => {
  const {
    children,
    ref,
    dataCy,
    dataTestId,
    url,
    style,
    classNames = [],
  } = props;

  const params = useMemo(
    () => ({
      ref,
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([classes.link, ...classNames]),
      href: url,
      style,
    }),
    [ref, dataCy, dataTestId, style, classNames, url]
  );

  return <a {...params}>{children}</a>;
};

export default Link;
