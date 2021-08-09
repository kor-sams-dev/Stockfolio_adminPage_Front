import React from "react";
import { InputProps } from "../../../../models/commonInterfaces";

function Input({ type, placeholder, name }: InputProps): JSX.Element {
  return (
    <input type={`${type}`} placeholder={`${placeholder}`} name={`${name}`} />
  );
}

export default Input;
