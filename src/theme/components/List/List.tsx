import { useMemo } from "react";
import { classSelector } from "../../helpers";
import type { FC, RefObject } from "react";
import type { Children } from "../../types";
import classes from "./List.module.scss";

export interface ListProps {
  children?: Children;
  ref?: RefObject<any>;
  tag?: "ul" | "ol";
  dataCy?: string;
  dataTestId?: string;
  style?: {
    [prop: string]: any;
  };
  classNames?: string[];
}

// TODO Develop this component

const List: FC<ListProps> = (props) => {
  const {
    children,
    ref,
    tag = "ul",
    dataCy,
    dataTestId,
    style,
    classNames = [],
  } = props;

  const params = useMemo(
    () => ({
      ref,
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([
        classes.list,
        classes[`${tag}`],
        ...classNames,
      ]),
      style,
    }),
    [ref, tag, dataCy, dataTestId, style, classNames]
  );

  switch (tag) {
    case "ul":
      return <ul {...params}>{children}</ul>;
    case "ol":
      return <ol {...params}>{children}</ol>;
    default:
      return <ul {...params}>{children}</ul>;
  }
};

export default List;
