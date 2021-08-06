import React from "react";
import styled from "styled-components";

import { ChildrenPropsType } from "../ChildrenPropsType";

const H3 = styled.h3`
  font-size: 24px;
  font-weight: 700;
`;

function Heading3({ children }: ChildrenPropsType): JSX.Element {
  return <H3>{children}</H3>;
}

export default Heading3;
