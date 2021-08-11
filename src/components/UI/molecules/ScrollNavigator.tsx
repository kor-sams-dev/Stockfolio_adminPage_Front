import React from "react";
import styled from "styled-components";

import DotBtn from "../atoms/buttons/DotBtn";

const Dots = styled.div`
  position: fixed;
  top: 50%;
  right: 39px;
  transform: translateY(5%);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 108px;
  z-index: 9999;
`;

function ScrollNavigator(): JSX.Element {
  return (
    <Dots>
      {[...Array(5)].map((dot, idx) => (
        <DotBtn key={dot} idx={idx} />
      ))}
    </Dots>
  );
}

export default ScrollNavigator;
