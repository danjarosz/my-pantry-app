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
}

const Link: FC<LinkProps> = (props) => {
  const { children, ref, dataCy, dataTestId, url, style } = props;

  const params = useMemo(
    () => ({
      ref,
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([classes.link]),
      href: url,
      style,
    }),
    [ref, dataCy, dataTestId, style, url]
  );

  return <a {...params}>{children}</a>;
};

export default Link;
