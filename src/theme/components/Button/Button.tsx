import { FC, useMemo } from "react";
import classes from "./Button.module.scss";
import { Children } from "../../types";
import { classSelector } from "../../helpers";

export interface ButtonProps {
  children?: Children;
  dataCy?: string;
  dataTestId?: string;
  style?: {
    [prop: string]: any;
  };
  onClick?: any;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, dataCy, dataTestId, style, onClick } = props;

  const params = useMemo(
    () => ({
      "data-cy": dataCy,
      "data-testid": dataTestId,
      className: classSelector([classes.button]),
      style: {
        ...style,
      },
      onClick: onClick,
    }),
    [dataCy, dataTestId, style, onClick]
  );

  return <button {...params}>{children}</button>;
};

export default Button;
