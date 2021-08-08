import React from "react";
import styled from "styled-components";

import DotBtn from "../atoms/buttons/DotBtn";

const Dots = styled.div`
  position: fixed;
  top: 50%;
  right: 39px;
  transform: translateY(5%);
  ${({ theme }) => theme.flexMixin("space-between", "normal")};
  flex-direction: column;
  height: 108px;
`;

function ScrollNavigator(): JSX.Element {
  return (
    <Dots>
      {[...Array(5)].map((dot, idx) => (
        <DotBtn key={dot} />
      ))}
    </Dots>
  );
}

export default ScrollNavigator;
