import React from "react";
import { ChildrenPropsType } from "./ChildrenPropsType";

function RoundBg({ children }: ChildrenPropsType): JSX.Element {
  return <div>{children}</div>;
}

export default RoundBg;
