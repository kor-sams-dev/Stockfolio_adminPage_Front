import React from "react";
import styled from "styled-components";

import Inner from "../../styles/Inner";
import Heading2 from "../UI/atoms/texts/Heading2";
import HistoryList from "../UI/organisms/HistoryList";

import theme from "../../styles/theme";
import CoAgencyList from "../UI/organisms/CoAgencyList";

const Box = styled.section`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  background: ${theme.color.white};
  padding-top: 80px;
`;

const Next = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 121px auto 152px;
  padding: 20px 106px;
  width: 360px;
  background: ${theme.color.main};
  border-radius: 100px;
  font-size: 24px;
  font-weight: 700;
  color: white;
`;

function History(): JSX.Element {
  return (
    <Box>
      <Inner size="wide">
        <Heading2 fontWeight={700} fontSize={24}>
          스폴이 걸어온 길
        </Heading2>
        <HistoryList />
        <Next>what&apos;s next?</Next>
        <CoAgencyList />
      </Inner>
    </Box>
  );
}

export default History;
