import { useMemo } from "react";
import { classSelector } from "../../helpers";
import { Link } from "../Link";
import type { FC, RefObject } from "react";
import type { LinkProps } from "../Link";
import classes from "./Cite.module.scss";

export interface CiteProps {
  ref?: RefObject<any>;
  dataCy?: string;
  dataTestId?: string;
  style?: {
    link: {
      [prop: string]: any;
    };
    cite: {
      [prop: string]: any;
    };
  };
  classNames?: {
    link: string[];
    cite: string[];
  };
  url: string;
  source: string;
}

// TODO Develop this component

const Cite: FC<CiteProps> = (props) => {
  const {
    ref,
    dataCy,
    dataTestId,
    style = { link: undefined, cite: undefined },
    classNames = { link: [], cite: [] },
    url,
    source,
  } = props;

  const linkParams = useMemo<LinkProps>(
    () => ({
      ref,
      dataCy,
      dataTestId,
      url,
      style: style.link,
      className: classSelector([...classNames.link]),
    }),
    [ref, dataCy, dataTestId, url, style.link, classNames.link]
  );

  const citeParams = useMemo(
    () => ({
      style: style.cite,
      className: classSelector([classes.cite, ...classNames.cite]),
    }),
    [classNames.cite, style.cite]
  );

  return (
    <Link {...linkParams}>
      <cite {...citeParams}>{source}</cite>
    </Link>
  );
};

export default Cite;
