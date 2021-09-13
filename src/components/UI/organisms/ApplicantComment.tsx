import React, { useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import theme from "../../../styles/theme";
import RootStore from "../../../stores/RootStore";
import { IApplicantBasicInfo } from "../../../models/AdminAccountInterface";

const { EvaluateButtonStoreActions, EvaluateButtonStore } = RootStore();

const ListAlert = styled.div`
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
`;

const EvaluationBox = styled.div`
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleText = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

const TimeDate = styled.span`
  color: ${theme.color.grey2};
  font-size: 10px;
  line-height: 1.5;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0px;
`;

const GoodBtn = styled.button`
  padding: 4px 8px;
  border: 1px solid ${theme.color.greyLight2};
  border-radius: 8px;
  background-color: ${EvaluateButtonStore.isChecked.good
    ? theme.color.blue
    : "white"};
  color: ${EvaluateButtonStore.isChecked.good ? "white" : "black"};
  cursor: pointer;

  &:hover {
    background-color: ${EvaluateButtonStore.isChecked.good
      ? theme.color.blue
      : theme.color.blueLight};
    color: white;
  }
`;

const SosoBtn = styled.button`
  padding: 5px 7px;
  border: 1px solid ${theme.color.greyLight2};
  border-radius: 8px;
  background-color: ${EvaluateButtonStore.isChecked.good
    ? theme.color.descDark
    : "white"};
  color: ${EvaluateButtonStore.isChecked.good ? "white" : "black"};
  cursor: pointer;

  &:hover {
    background-color: ${EvaluateButtonStore.isChecked.good
      ? theme.color.descDark
      : theme.color.grey2};
    color: white;
  }
`;

const BadBtn = styled.button`
  padding: 5px 7px;
  border: 1px solid ${theme.color.greyLight2};
  border-radius: 8px;
  background-color: ${EvaluateButtonStore.isChecked.good
    ? theme.color.red
    : "white"};
  color: ${EvaluateButtonStore.isChecked.good ? "white" : "black"};
  cursor: pointer;

  &:hover {
    background-color: ${EvaluateButtonStore.isChecked.good
      ? theme.color.red
      : theme.color.redLight};
    color: white;
  }
`;

const TextBox = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${theme.color.greyLight2};
  box-sizing: border-box;
  border-radius: 8px;
`;

const SubmitWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextLength = styled.span`
  font-size: 6px;
  color: ${theme.color.grey2};
`;

const SubmitBtn = styled.button`
  font-weight: 700;
  cursor: pointer;
  padding: 5px 8px;
  border-radius: 8px;

  &:hover {
    background-color: ${theme.color.main};
    color: white;
  }
`;

interface IAddData {
  data: IApplicantBasicInfo;
}

const ApplicantComment = observer(({ data }: IAddData): JSX.Element => {
  const presentDate = new Date();

  const [commentLength, setCommentLength] = useState("");

  const TextLengthCheck = (e: any) => {
    setCommentLength(e.target.value);
  };
  return (
    <>
      <ListAlert>
        {data.userName} 지원자에게 2개의 코멘트가 달렸습니다
      </ListAlert>
      <EvaluationBox>
        <TitleWrap>
          <TitleText>평가하기</TitleText>
          <TimeDate>
            {presentDate.getFullYear()}/{presentDate.getMonth()}/
            {presentDate.getDate()}{" "}
            {presentDate.getHours() >= 12 ? "오후" : "오전"}{" "}
            {presentDate.getHours() >= 13
              ? presentDate.getHours() - 12
              : presentDate.getHours()}
            :{presentDate.getMinutes()}
          </TimeDate>
        </TitleWrap>
        <ButtonWrap>
          <GoodBtn
            onClick={() => {
              EvaluateButtonStoreActions.setIsChecked("good");
            }}
          >
            뽑아요👍
          </GoodBtn>
          <SosoBtn
            onClick={() => {
              EvaluateButtonStoreActions.setIsChecked("soso");
            }}
          >
            그냥그래요🙄
          </SosoBtn>
          <BadBtn
            onClick={() => {
              EvaluateButtonStoreActions.setIsChecked("bad");
            }}
          >
            안돼요👎
          </BadBtn>
        </ButtonWrap>
        <TextBox maxLength={300} onChange={TextLengthCheck} />
        <SubmitWrap>
          <TextLength>({commentLength.length}/300자)</TextLength>
          <SubmitBtn>제출</SubmitBtn>
        </SubmitWrap>
      </EvaluationBox>
    </>
  );
});

export default ApplicantComment;
