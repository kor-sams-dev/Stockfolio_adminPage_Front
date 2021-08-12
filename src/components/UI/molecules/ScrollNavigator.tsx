import React from "react";
import styled from "styled-components";

import DotBtn from "../atoms/buttons/DotBtn";

const Dots = styled.div`
  position: fixed;
  top: 50%;
  right: 54px;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 108px;
  z-index: 9999;
`;

function ScrollNavigator(): JSX.Element {
  return (
    <Dots>
      {[...Array(5)].map((_, idx) => (
        <DotBtn key={Math.random()} idx={idx} />
      ))}
    </Dots>
  );
}

export default ScrollNavigator;
