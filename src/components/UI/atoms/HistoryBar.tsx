import React from "react";
import styled from "styled-components";

const Box = styled.div`
  position: absolute;
  left: 50%;
  display: flex;
  transform: translateX(-50%);
  width: 2px;
  height: calc(100vh - 140px);
`;

const Bar = styled.div`
  position: relative;
  width: 2px;
  height: 1155px;
  background: #7f6fc1;
`;

function HistoryBar(): JSX.Element {
  return (
    <Box>
      <Bar />
    </Box>
  );
}

export default HistoryBar;
