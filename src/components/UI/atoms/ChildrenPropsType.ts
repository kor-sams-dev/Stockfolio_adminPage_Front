import { ReactChild, ReactChildren } from "react";

export interface ChildrenPropsType {
  children?: ReactChild | ReactChildren;
  fontSize?: string;
  fontWeight?: string;
  fontColor?: string;
  itemId?: string;
  imgSrc?: string;
  title?: string;
  desc?: string;
}
