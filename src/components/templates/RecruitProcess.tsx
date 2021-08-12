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

const ProcessOrderList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ProcessBar = styled.div`
  visibility: hidden;
  position: relative;
  margin-bottom: 24px;
  width: 80px;
  height: 8px;
  background-color: #d8d8d8;
  border-radius: 4px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: ${theme.color.main};
    border-radius: 4px;
    transition: ease-in;
  }
`;

const ProcessTitle = styled.span`
  color: ${theme.color.white};
  font-size: 14px;
  font-weight: 400;
`;

const ProcessCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 23px;
  width: 68px;
  height: 68px;
  background-color: #d8d8d8;
  border-radius: 34px;
  transition: width 0.5s;
`;

const ProcessOrder = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & + li {
    margin-left: 16px;
  }

  &:hover ${ProcessBar} {
    visibility: visible;
    &::before {
      content: "";
      width: calc(100% - 1px);
      transition: width 2s ease-out;
    }
  }

  &:hover ${ProcessTitle} {
    font-size: 16px;
    font-weight: 700;
  }

  &:hover ${ProcessCircle} {
    width: 200px;
    background-color: ${theme.color.main};
    transition: width 0.5s;
  }
`;

const ProcessDesc = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

const InfoBox = styled.ul`
  padding: 32px 0 126px 0;
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
  list-style: disc inside;
  font-size: 16px;
  font-weight: 400;
`;

function RecruitProcess(): JSX.Element {
  return (
    <Inner size="wide">
      <OverViewCard />
      <ProcessBox>
        <ProcessOrderList>
          {RecruitProcessData.map(data => (
            <ProcessOrder key={data.processId}>
              <ProcessCircle>
                <ProcessTitle>{data.processName}</ProcessTitle>
              </ProcessCircle>
              <ProcessBar />
            </ProcessOrder>
          ))}
        </ProcessOrderList>
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
