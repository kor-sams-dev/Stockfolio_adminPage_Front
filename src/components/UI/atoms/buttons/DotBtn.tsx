import React from "react";
import styled from "styled-components";

const Dot = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colorBgGrey};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    border: ${({ theme }) => `1px solid ${theme.colorMain}`};
  }
`;

function DotBtn(): JSX.Element {
  return <Dot />;
}

export default DotBtn;
