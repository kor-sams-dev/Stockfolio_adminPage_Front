import React from "react";
import styled from "styled-components";

const Box = styled.div`
  margin-top: -52px;
  padding: 0 84px 15px 0;
  text-align: right;
`;

function MissionHeader(): JSX.Element {
  return (
    <Box>
      <img
        src="./images/whoAreWe.png"
        alt="공정성을 추구하는 크리에이터에게 안전한 생태계를 제공합니다"
      />
    </Box>
  );
}

export default MissionHeader;
