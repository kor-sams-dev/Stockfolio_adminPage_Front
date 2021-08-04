import React from "react";
import { ChildrenPropsType } from "../ChildrenPropsType";

function Heading2({ children }: ChildrenPropsType): JSX.Element {
  return <h2>{children}</h2>;
}

export default Heading2;
