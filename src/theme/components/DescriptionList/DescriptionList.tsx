import { useMemo } from "react";
import { classSelector } from "../../helpers";
import type { FC, RefObject } from "react";
import type { Children } from "../../types";
import classes from "./DescriptionList.module.scss";

export interface DescriptionListProps {
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

const DescriptionList: FC<DescriptionListProps> = (props) => {
  const { children, ref, dataCy, dataTestId, style, classNames = [] } = props;

  const params = useMemo(
    () => ({
      ref,
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([classes["description-list"], ...classNames]),
      style,
    }),
    [ref, dataCy, dataTestId, style, classNames]
  );

  return <dl {...params}>{children}</dl>;
};

export default DescriptionList;
