import { useMemo } from "react";
import { classSelector } from "../../helpers";
import type { Children } from "../../types";
import type { FC, RefObject } from "react";
import classes from "./Button.module.scss";

export interface ButtonProps {
  children?: Children;
  ref?: RefObject<any>;
  dataCy?: string;
  dataTestId?: string;
  style?: {
    [prop: string]: any;
  };
  classNames?: string[];
  onClick?: any;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    ref,
    dataCy,
    dataTestId,
    style,
    classNames = [],
    onClick,
  } = props;

  const params = useMemo(
    () => ({
      ref,
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([classes.button, ...classNames]),
      style,
      onClick: onClick,
    }),
    [ref, dataCy, dataTestId, style, classNames, onClick]
  );

  return <button {...params}>{children}</button>;
};

export default Button;
