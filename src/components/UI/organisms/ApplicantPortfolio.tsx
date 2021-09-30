import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import theme from "../../../styles/theme";

import { IApplicantPortfolio } from "../../../models/AdminAccountInterface";

import Desc from "../atoms/texts/Desc";

const BasicInfoWrap = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 60px 0;
`;

const InfoBox = styled.div`
  margin-left: 40px;
  padding-bottom: 60px;
  width: 450px;
  border-bottom: 1px solid ${theme.color.greyLight2};
`;

const TextBox = styled.div`
  margin-right: 40px;
  margin-bottom: 30px;
`;

const TextTitle = styled.div`
  width: 100%;
  font-size: 12px;
  color: ${theme.color.grey2};
`;

const TextContent = styled.div`
  margin-top: 12px;
  font-size: 14px;
`;

const DownloadBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DownloadBtn = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  background-color: ${theme.color.blue};
  font-size: 12px;
  color: white;
  cursor: pointer;
`;

interface IAddText {
  item: IApplicantPortfolio;
}

const ApplicantPortfolio = observer(({ item }: IAddText): JSX.Element => {
  return (
    <BasicInfoWrap>
      <Desc fontSize={16} fontWeight={700}>
        포트폴리오
      </Desc>
      <InfoBox>
        <TextBox>
          <TextTitle>첨부파일</TextTitle>
          <DownloadBtnWrap>
            <TextContent> </TextContent>
            <DownloadBtn>다운로드</DownloadBtn>
          </DownloadBtnWrap>
        </TextBox>
        <TextBox>
          <TextTitle>URL</TextTitle>
          <TextContent>{item.portfolioUrl}</TextContent>
        </TextBox>
      </InfoBox>
    </BasicInfoWrap>
  );
});

export default ApplicantPortfolio;
