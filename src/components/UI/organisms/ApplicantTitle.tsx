import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import Label from "../atoms/Labels/Label";

import theme from "../../../styles/theme";
import { IApplicantBasicInfo } from "../../../models/AdminAccountInterface";

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const TitleName = styled.span`
  font-size: 48px;
  font-weight: 700;
`;

const NotiWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const SupportNoti = styled.span`
  font-size: 16px;
  color: ${theme.color.blue};
`;

const SupportData = styled.span`
  margin-top: 12px;
  font-size: 14px;
  color: ${theme.color.grey2};
`;

interface IAddTitle {
  item: IApplicantBasicInfo;
}

const ApplicantTitle = observer(({ item }: IAddTitle): JSX.Element => {
  return (
    <>
      <Label stance={item.careerType as "신입" | "경력"} />
      <TitleWrap>
        <TitleName>{item.userName}</TitleName>
        <NotiWrap>
          <SupportNoti>{item.supportNoti}</SupportNoti>
          <SupportData>지원일: {item.supportData}</SupportData>
        </NotiWrap>
      </TitleWrap>
    </>
  );
});

export default ApplicantTitle;
