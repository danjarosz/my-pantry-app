import { useMemo } from "react";
import { classSelector } from "../../helpers";
import type { FC } from "react";
import type { Children } from "../../types";
import classes from "./List.module.scss";

export interface DescriptionListProps {
  children?: Children;
  dataCy?: string;
  dataTestId?: string;
  style?: {
    [prop: string]: any;
  };
}

// TODO Develop this component

const DescriptionList: FC<DescriptionListProps> = (props) => {
  const { dataCy, dataTestId, style, children } = props;

  const params = useMemo(
    () => ({
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([classes["description-list"]]),
      style: {
        ...style,
      },
    }),
    [dataCy, dataTestId, style]
  );

  return <dl {...params}>{children}</dl>;
};

export default DescriptionList;
