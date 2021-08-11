import React from "react";
import styled from "styled-components";

import { ChildrenPropsType } from "../ChildrenPropsType";

interface Props {
  fontColor: string;
  fontSize: string;
  fontWeight: string;
}

const Text = styled.p`
  color: ${({ fontColor }: Props) => `${fontColor}`};
  font-size: ${({ fontSize }: Props) => `${fontSize}px`};
  font-weight: ${({ fontWeight }: Props) => `${fontWeight}`};
`;

function Desc({ children }: ChildrenPropsType): JSX.Element {
  return <Text>{children}</Text>;
}

export default Desc;
