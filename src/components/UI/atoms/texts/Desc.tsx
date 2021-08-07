import React from "react";
import styled from "styled-components";

import { ChildrenPropsType } from "../ChildrenPropsType";

interface Props extends ChildrenPropsType {
  fontColor: string;
  fontSize: string;
  fontWeight: string;
}

const Text = styled.p.attrs((props: Props) => ({
  fontColor: props.fontColor,
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
}))`
  color: ${({ fontColor }: Props) => `${fontColor}`};
  font-size: ${({ fontSize }: Props) => `${fontSize}px`};
  font-weight: ${({ fontWeight }: Props) => `${fontWeight}`};
  line-height: 1.7em;
`;

function Desc({
  children,
  fontColor,
  fontSize,
  fontWeight,
}: Props): JSX.Element {
  return (
    <Text fontColor={fontColor} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </Text>
  );
}

export default Desc;
