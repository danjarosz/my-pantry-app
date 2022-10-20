import { useMemo } from "react";
import { classSelector } from "../../helpers";
import type { FC, RefObject } from "react";
import type { Children } from "../../types";
import classes from "./Typography.module.scss";

export interface TypographyProps {
  children?: Children;
  ref?: RefObject<any>;
  tag?:
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "em"
    | "i"
    | "strong"
    | "b"
    | "u"
    | "abbr";
  dataCy?: string;
  dataTestId?: string;
  style?: {
    [prop: string]: any;
  };
  classNames?: string[];
  title?: string;
}

// TODO Develop this component

const Typography: FC<TypographyProps> = (props) => {
  const {
    children,
    ref,
    tag = "p",
    dataCy,
    dataTestId,
    style,
    classNames = [],
    title,
  } = props;

  const params = useMemo(
    () => ({
      ref,
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([
        classes.typography,
        classes[`${tag}`],
        ...classNames,
      ]),
      style,
    }),
    [ref, tag, dataCy, dataTestId, style, classNames]
  );

  switch (tag) {
    case "p":
      return <p {...params}>{children}</p>;
    case "h1":
      return <h1 {...params}>{children}</h1>;
    case "h2":
      return <h2 {...params}>{children}</h2>;
    case "h3":
      return <h3 {...params}>{children}</h3>;
    case "h4":
      return <h4 {...params}>{children}</h4>;
    case "h5":
      return <h5 {...params}>{children}</h5>;
    case "h6":
      return <h6 {...params}>{children}</h6>;
    case "span":
      return <span {...params}>{children}</span>;
    case "em":
      return <em {...params}>{children}</em>;
    case "i":
      return <i {...params}>{children}</i>;
    case "strong":
      return <strong {...params}>{children}</strong>;
    case "b":
      return <b {...params}>{children}</b>;
    case "u":
      return <u {...params}>{children}</u>;
    case "abbr":
      return (
        <abbr {...params} title={title}>
          {children}
        </abbr>
      );
    default:
      return <p {...params}>{children}</p>;
  }
};

export default Typography;
