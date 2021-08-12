import React from "react";
import styled from "styled-components";

import ViewportBox from "../../styles/ViewportBox";
import Inner from "../../styles/Inner";
import Heading2 from "../UI/atoms/texts/Heading2";
import Heading3 from "../UI/atoms/texts/Heading3";
import MissionHeader from "../UI/molecules/MissionHeader";
import MissionContents from "../UI/molecules/MissionContents";

import theme from "../../styles/theme";

const Divider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Box = styled.div`
  width: 20%;
  padding-top: 25px;
  border-top: 1px solid black;
`;

function Mission(): JSX.Element {
  return (
    <ViewportBox bgColor={theme.color.bgLight}>
      <Inner size="wide">
        <Heading2 fontWeight={700} fontSize={24}>
          우리의 Mission
        </Heading2>
        <MissionHeader />
        <Divider>
          <Box>
            <Heading3 fontWeight={700}>스톡폴리오</Heading3>
          </Box>
          <MissionContents />
        </Divider>
      </Inner>
    </ViewportBox>
  );
}

export default Mission;