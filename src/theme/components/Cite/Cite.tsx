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
    }),
    [ref, dataCy, dataTestId, style, url]
  );

  const citeParams = useMemo(
    () => ({
      style: style.cite,
      className: classSelector([classes.cite]),
    }),
    [style.cite]
  );

  return (
    <Link {...linkParams}>
      <cite {...citeParams}>{source}</cite>
    </Link>
  );
};

export default Cite;
