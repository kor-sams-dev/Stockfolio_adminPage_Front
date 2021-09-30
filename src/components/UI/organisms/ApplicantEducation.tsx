import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import theme from "../../../styles/theme";

import { IApplicantEducation } from "../../../models/AdminAccountInterface";

import Desc from "../atoms/texts/Desc";

const BasicInfoWrap = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 60px 0;
`;

const InfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 40px;
  padding-bottom: 60px;
  width: 450px;
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
`;

const SecondTextWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

interface IAddText {
  item: IApplicantEducation;
}

const ApplicantEducation = observer(({ item }: IAddText): JSX.Element => {
  return (
    <BasicInfoWrap>
      <Desc fontSize={16} fontWeight={700}>
        학력정보
      </Desc>
      <InfoBox>
        <FirstTextWrap>
          <TextBox>
            <TextTitle>학력</TextTitle>
            <TextContent>{item.background}</TextContent>
          </TextBox>
          <TextBox>
            <TextTitle>학교명</TextTitle>
            <TextContent>{item.schoolName}</TextContent>
          </TextBox>
          <TextBox>
            <TextTitle>전공</TextTitle>
            <TextContent>{item.major}</TextContent>
          </TextBox>
        </FirstTextWrap>
        <SecondTextWrap>
          <TextBox>
            <TextTitle>학점</TextTitle>
            <TextContent>{item.grade}</TextContent>
          </TextBox>
          <TextBox>
            <TextTitle>졸업상태</TextTitle>
            <TextContent>{item.graduateState}</TextContent>
          </TextBox>
          <TextBox>
            <TextTitle>입학</TextTitle>
            <TextContent>{item.enrollDate}</TextContent>
          </TextBox>
          <TextBox>
            <TextTitle>졸업</TextTitle>
            <TextContent>{item.graduateDate}</TextContent>
          </TextBox>
        </SecondTextWrap>
      </InfoBox>
    </BasicInfoWrap>
  );
});

export default ApplicantEducation;
