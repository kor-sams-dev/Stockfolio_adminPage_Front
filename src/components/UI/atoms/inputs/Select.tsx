import React from "react";
import { ChildrenPropsType } from "../ChildrenPropsType";

interface SelectChildrenType extends ChildrenPropsType {
  name: string;
}

function Input({ children }: ChildrenPropsType): JSX.Element {
  const selects = { children } as SelectChildrenType;

  return (
    <>
      <select name={`${selects}`}>
        {[...Array(8)].map(option => (
          <option key={option} value={`${option}`}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}

export default Input;
