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
}

// TODO Develop this component

const DescriptionList: FC<DescriptionListProps> = (props) => {
  const { children, ref, dataCy, dataTestId, style } = props;

  const params = useMemo(
    () => ({
      ref,
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([classes["description-list"]]),
      style,
    }),
    [ref, dataCy, dataTestId, style]
  );

  return <dl {...params}>{children}</dl>;
};

export default DescriptionList;
