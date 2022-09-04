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
}

const Box: FC<BoxProps> = (props) => {
  const { tag = "div", children } = props;

  const params = useMemo(
    () => ({
      className: classSelector([classes.box]),
    }),
    []
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
