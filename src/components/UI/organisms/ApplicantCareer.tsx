import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import Desc from "../atoms/texts/Desc";

import theme from "../../../styles/theme";
import { IApplicantCareer } from "../../../models/AdminAccountInterface";

const BasicInfoWrap = styled.section`
  margin: 60px 0;
  display: flex;
  justify-content: space-between;
`;

const InfoBox = styled.div`
  margin-left: 40px;
  padding-bottom: 30px;
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

interface IAddText {
  item: IApplicantCareer;
}

const ApplicantCareer = observer(({ item }: IAddText): JSX.Element => {
  return (
    <BasicInfoWrap>
      <Desc fontSize={16} fontWeight={700}>
        경력사항
      </Desc>
      <InfoBox>
        <TextBox>
          <TextTitle>회사명</TextTitle>
          <TextContent>{item.companyName}</TextContent>
        </TextBox>
        <TextBox>
          <TextTitle>직급</TextTitle>
          <TextContent>{item.rank}</TextContent>
        </TextBox>
        <TextBox>
          <TextTitle>입사</TextTitle>
          <TextContent>{item.joinDate}</TextContent>
        </TextBox>
        <TextBox>
          <TextTitle>퇴사</TextTitle>
          <TextContent>{item.leavingDate}</TextContent>
        </TextBox>
        <TextBox>
          <TextTitle>담당업무</TextTitle>
          <TextContent>{item.businessTask}</TextContent>
        </TextBox>
      </InfoBox>
    </BasicInfoWrap>
  );
});

export default ApplicantCareer;
