import React from "react";
import styled from "styled-components";

import { ChildrenPropsType } from "../ChildrenPropsType";

const H2 = styled.h2`
  font-size: 36px;
  font-weight: 700;
`;

function Heading2({ children }: ChildrenPropsType): JSX.Element {
  return <H2>{children}</H2>;
}

export default Heading2;
