import React from "react";
import styled from "styled-components";

const Box = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: calc(100vh - 180px);
  overflow: hidden;
`;

const Bar = styled.div`
  position: relative;
  width: 2px;
  height: calc(100vh - 180px);
  background: #7f6fc1;

  &::before {
    content: "";
    position: absolute;
    top: -75px;
    left: -20px;
    width: 40px;
    height: 99px;
    background: linear-gradient(
      180deg,
      #ffffff 64.06%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -75px;
    left: -20px;
    width: 40px;
    height: 99px;
    background: linear-gradient(
      0deg,
      #ffffff 64.06%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

function HistoryBar(): JSX.Element {
  return (
    <Box>
      <Bar />
    </Box>
  );
}

export default HistoryBar;
