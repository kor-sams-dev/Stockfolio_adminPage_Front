import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import theme from "../../../styles/theme";

import { IApplicantBasicInfo } from "../../../models/AdminAccountInterface";

import Desc from "../atoms/texts/Desc";

const BasicInfoWrap = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 60px 0;
`;

const InfoBox = styled.div`
  display: flex;
  margin-left: 40px;
  padding-bottom: 60px;
  width: 450px;
  border-bottom: 1px solid ${theme.color.greyLight2};
`;

const TextBox = styled.div`
  margin-right: 40px;
`;

const TextTitle = styled.span`
  font-size: 12px;
  color: ${theme.color.grey2};
`;

const TextContent = styled.div`
  margin-top: 12px;
  font-size: 14px;
`;

interface IAddTitle {
  item: IApplicantBasicInfo;
}

const ApplicantBasicInfo = observer(({ item }: IAddTitle): JSX.Element => {
  return (
    <BasicInfoWrap>
      <Desc fontSize={16} fontWeight={700}>
        기본 정보
      </Desc>
      <InfoBox>
        <TextBox>
          <TextTitle>이름</TextTitle>
          <TextContent>{item.userName}</TextContent>
        </TextBox>
        <TextBox>
          <TextTitle>이메일</TextTitle>
          <TextContent>{item.email}</TextContent>
        </TextBox>
        <TextBox>
          <TextTitle>전화번호</TextTitle>
          <TextContent>{item.phoneNumber}</TextContent>
        </TextBox>
      </InfoBox>
    </BasicInfoWrap>
  );
});

export default ApplicantBasicInfo;
