import type { FC } from "react";
import { Children } from "../../types";

export interface ListProps {
  children?: Children;
  // TODO complement missing tags
  tag?: "ul" | "ol" | "dl";
  dataCy?: string;
  dataTestId?: string;
  style?: {
    [prop: string]: any;
  };
}

const List: FC<ListProps> = () => {
  return <ul></ul>;
};

export default List;
