import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import theme from "../../../styles/theme";

import { IApplicantIntroduce } from "../../../models/AdminAccountInterface";

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

const ThirdTextWrap = styled.div`
  padding: 16px;
  width: 100%;
  border: 1px solid ${theme.color.greyLight2};
  border-radius: 8px;
  font-size: 14px;
`;

interface IAddText {
  item: IApplicantIntroduce;
}

const ApplicantIntroduce = observer(({ item }: IAddText): JSX.Element => {
  return (
    <BasicInfoWrap>
      <Desc fontSize={16} fontWeight={700}>
        자기소개
      </Desc>
      <InfoBox>
        <ThirdTextWrap>{item.aboutMe}</ThirdTextWrap>
      </InfoBox>
    </BasicInfoWrap>
  );
});

export default ApplicantIntroduce;
