import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import Desc from "../atoms/texts/Desc";

import theme from "../../../styles/theme";
import { IApplicantPortfolio } from "../../../models/AdminAccountInterface";

const BasicInfoWrap = styled.section`
  margin: 60px 0;
  display: flex;
  justify-content: space-between;
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
  font-size: 12px;
  color: ${theme.color.grey2};
  width: 100%;
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
  background-color: ${theme.color.blue};
  color: white;
  font-size: 12px;
  padding: 6px 12px;
  border-radius: 8px;
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
