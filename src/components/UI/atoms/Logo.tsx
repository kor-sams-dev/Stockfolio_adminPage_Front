import React from "react";
import { ChildrenPropsType } from "./ChildrenPropsType";

function Logo({ children }: ChildrenPropsType): JSX.Element {
  return (
    <div>
      <img src={`${children}`} alt={`${children}`} />
    </div>
  );
}

export default Logo;
