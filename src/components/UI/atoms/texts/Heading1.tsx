import React from "react";
import styled from "styled-components";

import { ChildrenPropsType } from "../ChildrenPropsType";

const H1 = styled.h1`
  font-size: 64px;
  font-weight: 700;
`;

function Heading1({ children }: ChildrenPropsType): JSX.Element {
  return <H1>{children}</H1>;
}

export default Heading1;
