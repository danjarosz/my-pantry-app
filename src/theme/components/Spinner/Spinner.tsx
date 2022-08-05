import type { FC } from "react";
import classSelector from "../../helpers/classSelector";
import classes from "./Spinner.module.scss";

export interface SpinnerProps {
  testId?: string;
  dataCy?: string;
  variant?: "small" | "medium" | "large";
}

const Spinner: FC<SpinnerProps> = (props) => {
  const { testId, dataCy, variant = "medium" } = props;

  return (
    <div
      test-id={testId}
      data-cy={dataCy}
      className={classSelector([
        classes.spinner,
        variant === "small" && classes.small,
        variant === "medium" && classes.medium,
        variant === "large" && classes.large,
      ])}
    >
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
