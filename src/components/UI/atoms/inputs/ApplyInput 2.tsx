import React from "react";
import styled from "styled-components";
import { ApplyInputProps } from "../../../../models/commonInterfaces";

const Input = styled.input`
  outline: none;
`;

function ApplyInput({
  type,
  placeholder,
  name,
  className,
}: ApplyInputProps): JSX.Element {
  return (
    <Input
      className={`${className}`}
      type={`${type}`}
      placeholder={`${placeholder}`}
      name={`${name}`}
    />
  );
}

export default ApplyInput;
