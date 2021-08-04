import React from "react";
import { ChildrenPropsType } from "../ChildrenPropsType";

function Heading1({ children }: ChildrenPropsType): JSX.Element {
  return <h1>{children}</h1>;
}

export default Heading1;
