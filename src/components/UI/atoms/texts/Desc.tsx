import React from "react";
import { ChildrenPropsType } from "../ChildrenPropsType";

function Desc({ children }: ChildrenPropsType): JSX.Element {
  return <p>{children}</p>;
}

export default Desc;
