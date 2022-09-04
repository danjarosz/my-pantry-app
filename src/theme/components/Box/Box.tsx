import { FC, useMemo } from "react";
import { classSelector } from "../../helpers";
import classes from "./Box.module.scss";

export interface BoxProps {
  children?: JSX.Element | JSX.Element[] | string | string[];
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

const Box: FC<BoxProps> = (props) => {
  const {
    tag = "div",
    dataCy,
    dataTestId,
    width = "auto",
    height = "auto",
    display = "block",
    overflow = "hidden",
    overflowX,
    overflowY,
    children,
  } = props;

  const params = useMemo(
    () => ({
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([
        classes.box,
        classes[`display-${display}`],
        // TODO add positioning
        classes[`overflow-${overflow}`],
        //TODO make overflow work better
        Boolean(overflowX) && classes[`overflowX-${overflowX}`],
        Boolean(overflowY) && classes[`overflowY-${overflowY}`],
      ]),
      style: {
        width,
        height,
      },
    }),
    [dataCy, dataTestId, display, height, overflow, overflowX, overflowY, width]
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
