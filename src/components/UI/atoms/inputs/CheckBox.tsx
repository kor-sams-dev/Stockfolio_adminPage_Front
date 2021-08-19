import React from "react";
import styled from "styled-components";

const Label = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;

const Img = styled.img`
  margin-right: 5px;
`;

const Input = styled.input`
  display: none;
`;

interface CheckBoxProps {
  // name: string;
  title: string;
}

function CheckBox({ title }: CheckBoxProps): JSX.Element {
  return (
    <Label>
      <Img alt="체크" src="./images/checkBox_false.png" />
      {title} 없음
      <Input type="checkbox" />
    </Label>
  );
}

export default CheckBox;
