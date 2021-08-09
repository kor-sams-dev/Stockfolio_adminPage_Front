import React from "react";
import { SelectProps } from "../../../../models/commonInterfaces";

function Input({ name }: SelectProps): JSX.Element {
  return (
    <>
      <select name={name}>
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
