import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import Desc from "../atoms/texts/Desc";

import theme from "../../../styles/theme";
import { IApplicantIntroduce } from "../../../models/AdminAccountInterface";

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

const ThirdTextWrap = styled.div`
  padding: 16px;
  border: 1px solid ${theme.color.greyLight2};
  border-radius: 8px;
  width: 100%;
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
