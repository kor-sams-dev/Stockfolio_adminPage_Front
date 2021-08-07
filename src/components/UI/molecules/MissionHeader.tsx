import React from "react";
import styled from "styled-components";

const Box = styled.div`
  margin-top: -35px;
  padding: 0 110px 20px 0;
  text-align: right;
`;

function MissionHeader(): JSX.Element {
  return (
    <Box>
      <img src="./images/whoAreWe.png" alt="who are we" />
    </Box>
  );
}

export default MissionHeader;
