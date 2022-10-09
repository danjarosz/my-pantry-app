import { useMemo } from "react";
import { classSelector } from "../../helpers";
import type { FC } from "react";
import classes from "./DescriptionListItem.module.scss";

export interface DescriptionListItemProps {
  dataCy?: string;
  dataTestId?: string;
  style?: {
    [prop: string]: any;
  };
  title: string;
  description: string;
}

// TODO Develop this component

const DescriptionListItem: FC<DescriptionListItemProps> = (props) => {
  const { dataCy, dataTestId, style, title, description } = props;

  const params = useMemo(
    () => ({
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([classes["description-list-item"]]),
      style: {
        ...style,
      },
    }),
    [dataCy, dataTestId, style]
  );

  return (
    <div {...params}>
      <dt>{title}</dt>
      <dd>{description}</dd>
    </div>
  );
};

export default DescriptionListItem;
