import React from "react";
import { ChildrenPropsType } from "../ChildrenPropsType";

interface CheckBoxChildrenType extends ChildrenPropsType {
  type: string;
  name: string;
}

function CheckBox({ children }: ChildrenPropsType): JSX.Element {
  const inputs = { children } as CheckBoxChildrenType;

  return <input type="checkbox" name={`${inputs.name}`} />;
}

export default CheckBox;
