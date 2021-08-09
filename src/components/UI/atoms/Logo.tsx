import React from "react";
import styled from "styled-components";

const IMG = styled.img`
  width: 100%;
  height: 100%;
`;

function Logo(): JSX.Element {
  return (
    <div>
      <IMG src="../../../assets/images/Logo_Stockfolio.png" alt="Stockfolio" />
    </div>
  );
}

export default Logo;
