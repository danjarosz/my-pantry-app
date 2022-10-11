import { useMemo } from "react";
import { classSelector } from "../../helpers";
import type { FC } from "react";
import type { Children } from "../../types";
import classes from "./Quotation.module.scss";

export interface QuotationProps {
  children?: Children;
  tag?: "q" | "blockquote";
  cite: string;
  dataCy?: string;
  dataTestId?: string;
  style?: {
    [prop: string]: any;
  };
}

// TODO Develop this component

const Quotation: FC<QuotationProps> = (props) => {
  const { tag = "q", dataCy, dataTestId, style, children, cite } = props;

  const params = useMemo(
    () => ({
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([classes.quotation, classes[`${tag}`]]),
      style: {
        ...style,
      },
      cite,
    }),
    [tag, dataCy, dataTestId, style, cite]
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
