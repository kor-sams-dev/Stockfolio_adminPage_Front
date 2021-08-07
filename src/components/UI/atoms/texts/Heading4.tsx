import React from "react";
import styled from "styled-components";

import { ChildrenPropsType } from "../ChildrenPropsType";

const H4 = styled.h4`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 700;
`;

function Heading4({ children }: ChildrenPropsType): JSX.Element {
  return <H4>{children}</H4>;
}

export default Heading4;
