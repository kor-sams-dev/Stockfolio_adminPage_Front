import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import theme from "../../../styles/theme";
import {
  commentForm,
  IApplicantBasicInfo,
} from "../../../models/AdminAccountInterface";
import { Applicant } from "../../../config";

import TimeForm from "../atoms/TimeForm";
import ApplicantCommentList from "./ApplicantCommentList";
import AdminCommentForm from "../../../assets/data/adminCommentForm";

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

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0px;
`;

const GoodBtn = styled.button`
  padding: 4px 8px;
  border: 1px solid ${theme.color.greyLight2};
  border-radius: 8px;
  background-color: ${props =>
    props.isActive === 3 ? theme.color.blue : "white"};
  color: ${props => (props.isActive === 3 ? "white" : "black")};
  cursor: pointer;

  &:hover {
    background-color: ${props =>
      props.isActive === 3 ? theme.color.blue : theme.color.blueLight};
    color: white;
  }
`;

const SosoBtn = styled.button`
  padding: 5px 7px;
  border: 1px solid ${theme.color.greyLight2};
  border-radius: 8px;
  background-color: ${props =>
    props.isActive === 2 ? theme.color.descDark : "white"};
  color: ${props => (props.isActive === 2 ? "white" : "black")};
  cursor: pointer;

  &:hover {
    background-color: ${props =>
      props.isActive === 2 ? theme.color.descDark : theme.color.grey2};
    color: white;
  }
`;

const BadBtn = styled.button`
  padding: 5px 7px;
  border: 1px solid ${theme.color.greyLight2};
  border-radius: 8px;
  background-color: ${props =>
    props.isActive === 1 ? theme.color.red : "white"};
  color: ${props => (props.isActive === 1 ? "white" : "black")};
  cursor: pointer;

  &:hover {
    background-color: ${props =>
      props.isActive === 1 ? theme.color.red : theme.color.redLight};
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

const ApplicantCommentBox = observer(({ data }: IAddData): JSX.Element => {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set("Content-Type", "application/json");
  requestHeaders.set(
    "Authorization",
    localStorage
      ?.getItem("access_token")
      ?.slice(0, localStorage.getItem("access_token")!.length) || "no token"
  );

  const [saveCommnet, setSaveCommnet] = useState({
    score: 0,
    description: "",
  });

  const [activeBtn, setActiveBtn] = useState(0);

  const handleGoodButton = () => {
    if (activeBtn === 0) {
      setActiveBtn(3);
    } else if (activeBtn === 3) {
      setActiveBtn(0);
    } else {
      setActiveBtn(3);
    }
  };
  const handleSosoButton = () => {
    if (activeBtn === 0) {
      setActiveBtn(2);
    } else if (activeBtn === 2) {
      setActiveBtn(0);
    } else {
      setActiveBtn(2);
    }
  };
  const handleBadButton = () => {
    if (activeBtn === 0) {
      setActiveBtn(1);
    } else if (activeBtn === 1) {
      setActiveBtn(0);
    } else {
      setActiveBtn(1);
    }
  };

  const [commentLength, setCommentLength] = useState("");

  const TextLengthCheck = (e: any) => {
    setCommentLength(e.target.value);
    setSaveCommnet({ score: activeBtn, description: e.target.value });
  };

  const addComment = () => {
    console.log(saveCommnet);
    if (saveCommnet.description.length > 0 && saveCommnet.score > 0) {
      fetch(`${Applicant}/47/comments`, {
        method: "POST",
        headers: requestHeaders,
        body: JSON.stringify(saveCommnet),
      })
        .then(res => res.json())
        .then(res => {
          setActiveBtn(0);
          setCommentLength("");
          alert("Comment 등록이 완료되었습니다.");
        });
    } else if (saveCommnet.description.length === 0) {
      alert("Comment를 작성해 주세요");
    } else if (saveCommnet.score === 0) {
      alert("평가 버튼을 선택해주세요");
    }
  };

  const [commentList, setCommentList] = useState(commentForm);
  useEffect(() => {
    fetch(`${Applicant}/47/comments`, {
      method: "GET",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(item => {
        setCommentList(item.results);
      });
  }, []);

  return (
    <>
      <ListAlert>
        {data.userName} 지원자에게 {commentList.comments?.length}개의 코멘트가
        달렸습니다
      </ListAlert>
      <EvaluationBox>
        <TitleWrap>
          <TitleText>평가하기</TitleText>
          <TimeForm />
        </TitleWrap>
        <ButtonWrap>
          <GoodBtn onClick={handleGoodButton} isActive={activeBtn}>
            뽑아요👍
          </GoodBtn>
          <SosoBtn onClick={handleSosoButton} isActive={activeBtn}>
            그냥그래요🙄
          </SosoBtn>
          <BadBtn onClick={handleBadButton} isActive={activeBtn}>
            안돼요👎
          </BadBtn>
        </ButtonWrap>
        <TextBox
          maxLength={300}
          onChange={TextLengthCheck}
          value={commentLength}
        />
        <SubmitWrap>
          <TextLength>({commentLength.length}/300자)</TextLength>
          <SubmitBtn onClick={addComment}>제출</SubmitBtn>
        </SubmitWrap>
      </EvaluationBox>
      {commentList.comments?.map(item => {
        return <ApplicantCommentList item={item} key={item.updated_at} />;
      })}
    </>
  );
});
export default ApplicantCommentBox;
