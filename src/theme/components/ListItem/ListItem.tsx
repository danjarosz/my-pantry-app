import { useMemo } from "react";
import { classSelector } from "../../helpers";
import type { FC, RefObject } from "react";
import type { Children } from "../../types";
import classes from "./ListItem.module.scss";

export interface ListItemProps {
  children?: Children;
  ref?: RefObject<any>;
  dataCy?: string;
  dataTestId?: string;
  style?: {
    [prop: string]: any;
  };
  classNames?: string[];
}

// TODO Develop this component

const ListItem: FC<ListItemProps> = (props) => {
  const { children, ref, dataCy, dataTestId, style, classNames = [] } = props;

  const params = useMemo(
    () => ({
      ref,
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([classes["list-item"], ...classNames]),
      style,
    }),
    [ref, dataCy, dataTestId, style, classNames]
  );

  return <li {...params}>{children}</li>;
};

export default ListItem;
