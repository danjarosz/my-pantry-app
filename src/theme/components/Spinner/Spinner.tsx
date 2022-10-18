import type { FC } from "react";
import { classSelector } from "../../helpers";
import classes from "./Spinner.module.scss";
import type { RefObject } from "react";
import { useMemo } from "react";

export interface SpinnerProps {
  ref?: RefObject<any>;
  testId?: string;
  dataCy?: string;
  variant?: "small" | "medium" | "large";
}

const Spinner: FC<SpinnerProps> = (props) => {
  const { ref, testId, dataCy, variant = "medium" } = props;

  const params = useMemo(
    () => ({
      ref,
      "data-testid": testId,
      "data-cy": dataCy,
      className: classSelector([
        classes.spinner,
        variant === "small" && classes.small,
        variant === "medium" && classes.medium,
        variant === "large" && classes.large,
      ]),
    }),
    [dataCy, ref, testId, variant]
  );

  return (
    <div {...params}>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
