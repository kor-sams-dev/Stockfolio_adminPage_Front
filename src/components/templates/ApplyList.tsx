import React from "react";
import styled from "styled-components";

import Inner from "../../styles/Inner";
import QuantityLabel from "../UI/atoms/Labels/QuantityLabel";
import Heading2 from "../UI/atoms/texts/Heading2";
import theme from "../../styles/theme";
import Label from "../UI/atoms/Labels/Label";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 176px;
`;

const ApplyNavBar = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 0;
`;

const PositionName = styled.span`
  padding-right: 4px;
  font-size: 14px;
  font-weight: 700;
`;

const PositionList = styled.li`
  display: flex;
  align-items: center;

  & + li {
    padding-left: 24px;
  }

  &:hover ${PositionName} {
    color: ${theme.color.mainDeep};
  }
`;

const RecruitListBox = styled.ul``;

const RecruitList = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 24px 32px;
  width: 980px;
  height: 74px;
  border-radius: 16px;

  &:hover {
    background-color: ${theme.color.greyLight1};
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const PaddingBox = styled.div`
  padding-left: 24px;
`;

const Employment = styled.span``;

const Deadline = styled.span`
  padding-left: 16px;
`;

function ApplyList(): JSX.Element {
  return (
    <Container>
      <Inner size="narrow">
        <ApplyNavBar>
          <PositionList>
            <PositionName>개발</PositionName>
            <QuantityLabel quantity={20} />
          </PositionList>
          <PositionList>
            <PositionName>디자인</PositionName>
            <QuantityLabel quantity={14} />
          </PositionList>
          <PositionList>
            <PositionName>마케팅</PositionName>
            <QuantityLabel quantity={3} />
          </PositionList>
        </ApplyNavBar>
        <RecruitListBox>
          <RecruitList>
            <Box>
              <Label stance="senior" />
              <PaddingBox>
                <Heading2 fontSize={18} fontWeight={700}>
                  Front-end Developer
                </Heading2>
              </PaddingBox>
            </Box>
            <Box>
              <Employment>정규직</Employment>
              <Deadline>2021-09-19 마감</Deadline>
            </Box>
          </RecruitList>
        </RecruitListBox>
      </Inner>
    </Container>
  );
}

export default ApplyList;
