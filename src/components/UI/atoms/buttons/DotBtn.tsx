import React from "react";
import styled from "styled-components";

import { ChildrenPropsType } from "../ChildrenPropsType";

const Dot = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colorBgGrey};

  &::after {
    content: "";
    position: absolute;
    top: -6px;
    left: -6px;
    width: 20px;
    height: 20px;
    border: ${({ theme }) => `1px solid ${theme.colorMain}`};
    border-radius: 50%;
  }
`;

function DotBtn({ children }: ChildrenPropsType): JSX.Element {
  return <Dot>{children}</Dot>;
}

export default DotBtn;
