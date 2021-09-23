import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import theme from "../../../styles/theme";
import { IApplicantListData } from "../../../models/AdminAccountInterface";
import AdminCommentForm from "../../../assets/data/adminCommentForm";

const CommentBox = styled.div`
  margin-top: 10px;
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
  background-color: ${props =>
    props.tabIndex === 3
      ? theme.color.bgLightBlue
      : `${
          props.tabIndex === 2
            ? theme.color.bgLightGrey
            : theme.color.bgLightRed
        }`};
`;

const CommentTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 1px solid ${theme.color.greyLight2};
`;

const TitleText = styled.div`
  display: inline;
  font-size: 14px;
  font-weight: 700;
  color: ${props =>
    props.tabIndex === 3
      ? theme.color.blue
      : `${props.tabIndex === 2 ? theme.color.grey2 : theme.color.red}`};
`;

const AdminWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const AdminAccount = styled.div`
  margin-bottom: 5px;
  text-align: right;
  font-size: 6px;
`;

const TimeDate = styled.span`
  color: ${theme.color.grey2};
  font-size: 6px;
  line-height: 1.5;
`;

const TextBox = styled.div`
  margin-top: 8px;
  font-size: 10px;
  line-height: 20px;
`;

interface IAddData {
  item: IApplicantListData;
}

const ApplicantCommentList = observer(({ item }: IAddData): JSX.Element => {
  const dateSlice = `${item.updated_at?.slice(0, 4)}/${item.updated_at?.slice(
    5,
    7
  )}/${item.updated_at?.slice(8, 10)} `;
  const meridiem = Number(item.updated_at?.slice(11, 13));
  const timeSlice = ` ${item.updated_at?.slice(11, 16)}`;
  const { score } = item;

  return (
    <CommentBox tabIndex={score}>
      <CommentTitleWrap>
        <TitleText tabIndex={score}>
          {AdminCommentForm.evaluation[item.score].text}
        </TitleText>
        <AdminWrap>
          <AdminAccount>{item.admin_name}</AdminAccount>
          <TimeDate>
            {dateSlice}
            {meridiem >= 12 ? "오후" : "오전"}
            {timeSlice}
          </TimeDate>
        </AdminWrap>
      </CommentTitleWrap>
      <TextBox>{item.description}</TextBox>
    </CommentBox>
  );
});

export default ApplicantCommentList;
