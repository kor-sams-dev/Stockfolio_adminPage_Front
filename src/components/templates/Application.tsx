import React from "react";
import styled from "styled-components";

import Inner from "../../styles/Inner";
import ApplicationHeader from "../UI/molecules/ApplicationHeader";

const Box = styled.div`
  display: flex;
  justify-content: center;
  padding: 176px 74px 0;
`;

const Application = (): JSX.Element => {
  return (
    <Box>
      <Inner size="wide">
        <ApplicationHeader />
      </Inner>
    </Box>
  );
};

export default Application;
