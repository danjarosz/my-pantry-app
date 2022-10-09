import { useMemo } from "react";
import { classSelector } from "../../helpers";
import type { FC } from "react";
import type { Children } from "../../types";
import classes from "./ListItem.module.scss";

export interface ListItemProps {
  children?: Children;
  dataCy?: string;
  dataTestId?: string;
  style?: {
    [prop: string]: any;
  };
}

// TODO Develop this component

const ListItem: FC<ListItemProps> = (props) => {
  const { dataCy, dataTestId, style, children } = props;

  const params = useMemo(
    () => ({
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([classes["list-item"]]),
      style: {
        ...style,
      },
    }),
    [dataCy, dataTestId, style]
  );

  return <li {...params}>{children}</li>;
};

export default ListItem;
