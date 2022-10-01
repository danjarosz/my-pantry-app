import type { FC } from "react";
import type { Children } from "../../types";

export interface TypographyProps {
  children?: Children;
}

const Typography: FC<TypographyProps> = (props) => {
  const { children } = props;

  return <p>{children}</p>;
};

export default Typography;
