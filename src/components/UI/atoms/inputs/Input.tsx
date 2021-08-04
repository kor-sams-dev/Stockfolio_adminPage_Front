import React from "react";
import { ChildrenPropsType } from "../ChildrenPropsType";

interface InputChildrenType extends ChildrenPropsType {
  type: string;
  placeholder: string;
  name: string;
}

function Input({ children }: ChildrenPropsType): JSX.Element {
  const inputs = { children } as InputChildrenType;

  return (
    <input
      type={`${inputs.type}`}
      placeholder={`${inputs.placeholder}`}
      name={`${inputs.name}`}
    />
  );
}

export default Input;
