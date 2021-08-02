import React from "react";
import { ChildrenPropsType } from "../ChildrenPropsType";

function Label({ children }: ChildrenPropsType): JSX.Element {
  return (
    <div>
      <span>{children}</span>
    </div>
  );
}

export default Label;
