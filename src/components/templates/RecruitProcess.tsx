import React from "react";
import styled from "styled-components";

import Inner from "../../styles/Inner";
import OverViewCard from "../UI/molecules/OverViewCard";
import theme from "../../styles/theme";

import RecruitProcessData from "../../assets/data/RecruitProcessData";
import RecruitInfoData from "../../assets/data/RecruitInfoData";
import Heading3 from "../UI/atoms/texts/Heading3";

const ProcessBox = styled.div`
  padding: 20px 0 30px 0;
  border-bottom: 1px solid ${theme.color.greyLight2};
`;

const ProcessBtnList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 55px;
`;

const ProcessBtn = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 68px;
  background-color: #d8d8d8;
  border-radius: 50%;
  color: ${theme.color.white};
  text-align: center;
  font-size: 14px;
  font-weight: 400;

  & + li {
    margin-left: 16px;
  }
`;

const ProcessDesc = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

const InfoBox = styled.ul`
  padding-top: 32px;
`;

const ProcessInfoList = styled.li`
  & + li {
    padding-top: 60px;
  }
`;

const Box = styled.div`
  padding-top: 24px;
`;

const InfoList = styled.ul``;

const Info = styled.li`
  margin-bottom: 7px;
  list-style: disc;
  font-size: 16px;
  font-weight: 400;
`;

function RecruitProcess(): JSX.Element {
  return (
    <Inner size="wide">
      <OverViewCard />
      <ProcessBox>
        <ProcessBtnList>
          <ProcessBtn>서류전형</ProcessBtn>
          <ProcessBtn>1차면접</ProcessBtn>
          <ProcessBtn>2차면접</ProcessBtn>
          <ProcessBtn>최종합격</ProcessBtn>
        </ProcessBtnList>
        <ProcessDesc>
          이력서 혹은 포트폴리오를 토대로 지원 자격을 검토합니다.
        </ProcessDesc>
      </ProcessBox>
      <InfoBox>
        {RecruitInfoData.map(data => (
          <ProcessInfoList key={data.titleId}>
            <Heading3 fontColor={theme.color.black} fontWeight={700}>
              {data.titleName}
            </Heading3>
            <Box>
              <InfoList>
                {data.contentList.map(content => (
                  <Info key={`${data.titleId} && ${content}`}>{content}</Info>
                ))}
              </InfoList>
            </Box>
          </ProcessInfoList>
        ))}
      </InfoBox>
    </Inner>
  );
}

export default RecruitProcess;
