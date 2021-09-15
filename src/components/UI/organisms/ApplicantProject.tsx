import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import Desc from "../atoms/texts/Desc";

import theme from "../../../styles/theme";
import { IApplicantProject } from "../../../models/AdminAccountInterface";

const BasicInfoWrap = styled.section`
  margin: 60px 0;
  display: flex;
  justify-content: space-between;
`;

const InfoBox = styled.div`
  margin-left: 40px;
  padding-bottom: 60px;
  width: 450px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid ${theme.color.greyLight2};
`;

const TextBox = styled.div`
  margin-right: 40px;
  margin-bottom: 30px;
`;

const TextTitle = styled.span`
  font-size: 12px;
  color: ${theme.color.grey2};
`;

const TextContent = styled.div`
  margin-top: 12px;
  font-size: 14px;
`;

const FirstTextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const DateWrap = styled.div`
  display: flex;
`;

const SecondTextWrap = styled.div`
  display: flex;
`;

const ThirdTextWrap = styled.div`
  padding: 16px;
  border: 1px solid ${theme.color.greyLight2};
  border-radius: 8px;
  width: 100%;
  font-size: 14px;
`;

interface IAddText {
  item: IApplicantProject;
}

const ApplicantProject = observer(({ item }: IAddText): JSX.Element => {
  return (
    <BasicInfoWrap>
      <Desc fontSize={16} fontWeight={700}>
        프로젝트 수행이력
      </Desc>
      <InfoBox>
        <FirstTextWrap>
          <TextBox>
            <TextTitle>프로젝트명</TextTitle>
            <TextContent>{item.projectName}</TextContent>
          </TextBox>
          <DateWrap>
            <TextBox>
              <TextTitle>시작</TextTitle>
              <TextContent>{item.startDate}</TextContent>
            </TextBox>
            <TextBox>
              <TextTitle>종료</TextTitle>
              <TextContent>{item.endDate}</TextContent>
            </TextBox>
          </DateWrap>
        </FirstTextWrap>
        <SecondTextWrap>
          <TextBox>
            <TextTitle>소속기관명</TextTitle>
            <TextContent>{item.association}</TextContent>
          </TextBox>
          <TextBox>
            <TextTitle>주사용 기술</TextTitle>
            <TextContent>{item.mainStack}</TextContent>
          </TextBox>
        </SecondTextWrap>
        <ThirdTextWrap>{item.projectInfo}</ThirdTextWrap>
      </InfoBox>
    </BasicInfoWrap>
  );
});

export default ApplicantProject;
