import type { FC } from "react";
import Spinner from "../../theme/components/Spinner/Spinner";
import classes from "./PageLoader.module.scss";

interface PageLoaderProps {}

const PageLoader: FC<PageLoaderProps> = () => {
  return (
    <div className={classes.pageLoader}>
      <div className={classes.spinnerWrapper}>
        <Spinner testId="spinner" dataCy="spinner" variant="large" />
      </div>
    </div>
  );
};

export default PageLoader;
