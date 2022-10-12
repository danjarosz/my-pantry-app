// import { useMemo } from "react";
// import { classSelector } from "../../helpers";
import type { FC } from "react";
// import classes from "./Cite.module.scss";
import { Link } from "../Link";

export interface CiteProps {
  dataCy?: string;
  dataTestId?: string;
  style?: {
    [prop: string]: any;
  };
  url: string;
  source: string;
}

// TODO Develop this component

const Cite: FC<CiteProps> = (props) => {
  // const { dataCy, dataTestId, style, url, source } = props;
  const { url, source } = props;

  // const params = useMemo(
  //   () => ({
  //     "data-cy": dataCy,
  //     "data-testid": dataTestId,
  //     className: classSelector([classes.cite]),
  //     style: {
  //       ...style,
  //     },
  //   }),
  //   [dataCy, dataTestId, style]
  // );

  return (
    <Link url={url}>
      <cite>{source}</cite>
    </Link>
  );
};

export default Cite;
