import React from "react";
import { ChildrenPropsType } from "../ChildrenPropsType";

function SquareBtn({ children }: ChildrenPropsType): JSX.Element {
  return <button type="button">{children}</button>;
}

export default SquareBtn;
