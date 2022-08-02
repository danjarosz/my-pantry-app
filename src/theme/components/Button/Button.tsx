import { FC, ReactNode } from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
  children?: ReactNode;
  onClick?: any;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, onClick } = props;

  return (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
