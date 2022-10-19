import { useMemo } from "react";
import { classSelector } from "../../helpers";
import type { FC, RefObject } from "react";
import type { Children } from "../../types";
import classes from "./Box.module.scss";

export interface BoxProps {
  children?: Children;
  ref?: RefObject<any>;
  tag?:
    | "div"
    | "main"
    | "section"
    | "article"
    | "aside"
    | "nav"
    | "header"
    | "footer";
  dataCy?: string;
  dataTestId?: string;
  style?: {
    [prop: string]: any;
  };
  classNames?: string[];
  width?: string;
  height?: string;
  display?:
    | "block"
    | "inline"
    | "inline-block"
    | "flex"
    | "inline-flex"
    | "none";
  overflow?: "visible" | "hidden" | "clip" | "scroll" | "auto";
  overflowX?: "visible" | "hidden" | "clip" | "scroll" | "auto";
  overflowY?: "visible" | "hidden" | "clip" | "scroll" | "auto";
}

// TODO Develop this component

const Box: FC<BoxProps> = (props) => {
  const {
    children,
    ref,
    tag = "div",
    dataCy,
    dataTestId,
    style = {},
    classNames = [],
    width = "auto",
    height = "auto",
    display = "block",
    overflow,
    overflowX,
    overflowY,
  } = props;

  // TODO add some validation - e.g. if there is position: absolute, throw a warning if x and y is not provided

  const params = useMemo(
    () => ({
      ref,
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([
        // TODO add different options of box-sizing
        classes.box,
        classes[`display-${display}`],
        // TODO add flexbox properties
        // TODO add positioning
        Boolean(overflow) && classes[`overflow-${overflow}`],
        Boolean(overflowX) && classes[`overflowX-${overflowX}`],
        Boolean(overflowY) && classes[`overflowY-${overflowY}`],
        // TODO add padding (internal spacing)
        // TODO add margin (external spacing)
        // TODO add border
        // TODO add box-shadow
        // TODO add background or create component to manage bgc
        // TODO add inline-size and box-size.
        ...classNames,
      ]),
      style: {
        width,
        height,
        ...style,
      },
    }),
    [
      ref,
      dataCy,
      dataTestId,
      display,
      style,
      classNames,
      width,
      height,
      overflow,
      overflowX,
      overflowY,
    ]
  );

  switch (tag) {
    case "div":
      return <div {...params}>{children}</div>;
    case "main":
      return <main {...params}>{children}</main>;
    case "section":
      return <section {...params}>{children}</section>;
    case "article":
      return <article {...params}>{children}</article>;
    case "aside":
      return <aside {...params}>{children}</aside>;
    case "nav":
      return <nav {...params}>{children}</nav>;
    case "header":
      return <header {...params}>{children}</header>;
    case "footer":
      return <footer {...params}>{children}</footer>;
    default:
      return <div {...params}>{children}</div>;
  }
};

export default Box;
