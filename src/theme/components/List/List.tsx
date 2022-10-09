import { useMemo } from "react";
import { classSelector } from "../../helpers";
import type { FC } from "react";
import type { Children } from "../../types";
import classes from "./List.module.scss";

export interface ListProps {
  children?: Children;
  tag?: "ul" | "ol";
  dataCy?: string;
  dataTestId?: string;
  style?: {
    [prop: string]: any;
  };
}

// TODO Develop this component

const List: FC<ListProps> = (props) => {
  const { tag = "ul", dataCy, dataTestId, style, children } = props;

  const params = useMemo(
    () => ({
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([classes.list, classes[`${tag}`]]),
      style: {
        ...style,
      },
    }),
    [tag, dataCy, dataTestId, style]
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
