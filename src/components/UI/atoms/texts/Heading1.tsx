import React from "react";
import styled from "styled-components";

import { ChildrenPropsType } from "../ChildrenPropsType";

const H1 = styled.h1`
  margin: 12px 0px 75px;
  font-size: 60px;
  font-weight: 700;
  line-height: 75px;
`;

function Heading1({ children }: ChildrenPropsType): JSX.Element {
  return <H1>{children}</H1>;
}

export default Heading1;
