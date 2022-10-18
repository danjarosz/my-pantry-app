import { useMemo } from "react";
import { classSelector } from "../../helpers";
import type { FC, RefObject } from "react";
import classes from "./DescriptionListItem.module.scss";

export interface DescriptionListItemProps {
  ref?: RefObject<any>;
  dataCy?: string;
  dataTestId?: string;
  style?: {
    [prop: string]: any;
  };
  title: string;
  description: string | string[];
}

// TODO Develop this component

const DescriptionListItem: FC<DescriptionListItemProps> = (props) => {
  const { ref, dataCy, dataTestId, style, title, description } = props;

  const params = useMemo(
    () => ({
      ref,
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([classes["description-list-item"]]),
      style,
    }),
    [ref, dataCy, dataTestId, style]
  );

  const descriptionEl = useMemo(() => {
    switch (typeof description) {
      case "string":
        return <dd>{description}</dd>;
        break;
      case "object":
        if (description instanceof Array) {
          return (
            <>
              {description.map((description, index) => (
                <dd key={index}>{description}</dd>
              ))}
            </>
          );
        } else {
          return null;
        }
        break;
      default:
        return null;
    }
  }, [description]);

  return (
    <div {...params}>
      <dt>{title}</dt>
      {descriptionEl}
    </div>
  );
};

export default DescriptionListItem;
