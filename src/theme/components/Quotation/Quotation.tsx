import { useMemo } from "react";
import { classSelector } from "../../helpers";
import type { FC, RefObject } from "react";
import type { Children } from "../../types";
import classes from "./Quotation.module.scss";

export interface QuotationProps {
  children?: Children;
  ref?: RefObject<any>;
  tag?: "q" | "blockquote";
  cite: string;
  dataCy?: string;
  dataTestId?: string;
  style?: {
    [prop: string]: any;
  };
  classNames?: string[];
}

// TODO Develop this component

const Quotation: FC<QuotationProps> = (props) => {
  const {
    children,
    ref,
    tag = "q",
    dataCy,
    dataTestId,
    style,
    classNames = [],
    cite,
  } = props;

  const params = useMemo(
    () => ({
      ref,
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([
        classes.quotation,
        classes[`${tag}`],
        ...classNames,
      ]),
      style,
      cite,
    }),
    [ref, tag, dataCy, dataTestId, style, cite, classNames]
  );

  switch (tag) {
    case "q":
      return <q {...params}>{children}</q>;
    case "blockquote":
      return <blockquote {...params}>{children}</blockquote>;
    default:
      return <q {...params}>{children}</q>;
  }
};

export default Quotation;
