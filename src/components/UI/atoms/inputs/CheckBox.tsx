import React from "react";
import { CheckBoxProps } from "../../../../models/commonInterfaces";

function CheckBox({ name }: CheckBoxProps): JSX.Element {
  return <input type="checkbox" name={`${name}`} />;
}

export default CheckBox;
