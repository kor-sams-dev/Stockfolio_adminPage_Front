import React from "react";
import styled from "styled-components";
import applicationForm from "../../assets/data/applicationForm";

import Inner from "../../styles/Inner";
import theme from "../../styles/theme";
import SquareBtn from "../UI/atoms/buttons/SquareBtn";

import ApplicationHeader from "../UI/molecules/ApplicationHeader";
// import ApplicationItem from "../UI/molecules/ApplicationItem";
import ApplicationBasicInfo from "../UI/organisms/ApplicationBasicInfo";
import ApplicationCareer from "../UI/organisms/ApplicationCareer";
import ApplicationEducation from "../UI/organisms/ApplicationEducation";
import ApplicationIntroduction from "../UI/organisms/ApplicationIntroduction";
import ApplicationPortfolio from "../UI/organisms/ApplicationPortfolio";
import ApplicationProject from "../UI/organisms/ApplicationProject";

const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
  padding: 176px 74px 0;
`;

const Content = styled.div`
  padding: 0 42px 120px;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Application = (): JSX.Element => {
  return (
    <Box>
      <Inner size="wide">
        <Content>
          <ApplicationHeader />
          <ApplicationBasicInfo />
          <ApplicationCareer />
          <ApplicationProject />
          <ApplicationIntroduction />
          <ApplicationPortfolio />
          <ApplicationEducation />
        </Content>
        <BtnBox>
          <SquareBtn
            isFilled
            btnWidth={328}
            btnColor={theme.color.main}
            fontColor={theme.color.white}
            fontSize={14}
            fontWeight={700}
          >
            지원서 제출하기
          </SquareBtn>
        </BtnBox>
      </Inner>
    </Box>
  );
};

export default Application;
