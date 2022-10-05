import { useMemo } from "react";
import { classSelector } from "../../helpers";
import type { FC } from "react";
import type { Children } from "../../types";
import classes from "./ListItem.module.scss";

export interface ListItemProps {
  children?: Children;
  tag?: "li" | "dt" | "dd";
  dataCy?: string;
  dataTestId?: string;
  style?: {
    [prop: string]: any;
  };
}

// TODO Develop this component

const ListItem: FC<ListItemProps> = (props) => {
  const { tag = "li", dataCy, dataTestId, style, children } = props;

  const params = useMemo(
    () => ({
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([classes["list-item"], classes[`${tag}`]]),
      style: {
        ...style,
      },
    }),
    [tag, dataCy, dataTestId, style]
  );

  switch (tag) {
    case "li":
      return <li {...params}>{children}</li>;
    case "dt":
      return <dt {...params}>{children}</dt>;
    case "dd":
      return <dd {...params}>{children}</dd>;
    default:
      return <li {...params}>{children}</li>;
  }
};

export default ListItem;
