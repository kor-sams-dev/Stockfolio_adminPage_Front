import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";
import { Recruits } from "../../../config";

import Label from "../atoms/Labels/Label";

import theme from "../../../styles/theme";
import {
  IApplicantBasicInfo,
  IApplicantData,
} from "../../../models/AdminAccountInterface";

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
  cursor: pointer;
`;

const SupportData = styled.span`
  margin-top: 12px;
  font-size: 14px;
  color: ${theme.color.grey2};
`;

interface IAddTitle {
  item: IApplicantBasicInfo;
  data: IApplicantData;
}

const ApplicantTitle = observer(({ item, data }: IAddTitle): JSX.Element => {
  const recruit = data.recruit_id;

  const [recruitTitle, setRecruitTitle] = useState();

  useEffect(() => {
    fetch(`${Recruits}/${recruit}`)
      .then(res => res.json())
      .then(list => {
        setRecruitTitle(list.result?.position_title);
      });
  }, [data]);

  const history = useHistory();
  const goToRecruit = () => {
    history.push(`/recruit/apply/${recruit}`);
  };

  const dateSlice = data.created_at?.slice(0, 10);

  return (
    <>
      <Label stance={data.career_type as "신입" | "경력"} />
      <TitleWrap>
        <TitleName>{item.userName}</TitleName>
        <NotiWrap>
          <SupportNoti onClick={goToRecruit}>{recruitTitle}</SupportNoti>
          <SupportData>지원일: {dateSlice}</SupportData>
        </NotiWrap>
      </TitleWrap>
    </>
  );
});

export default ApplicantTitle;
