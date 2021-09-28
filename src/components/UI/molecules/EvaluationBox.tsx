import React, { useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { useLocation } from "react-router-dom";

import theme from "../../../styles/theme";
import { Applicant } from "../../../config";

import TimeForm from "../atoms/TimeForm";
import requestHeaders from "../../../utils/getToken";

const EvaluationWrap = styled.div`
  margin-top: 10px;
  padding: 16px 15px;
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

const DeleteBtn = styled.button`
  font-weight: 700;
  cursor: pointer;
  padding: 5px 8px;
  border-radius: 8px;
  display: inline;

  &:hover {
    background-color: ${theme.color.main};
    color: white;
  }
`;

const EditBtn = styled.button`
  font-weight: 700;
  cursor: pointer;
  padding: 5px 8px;
  border-radius: 8px;
  display: inline;

  &:hover {
    background-color: ${theme.color.main};
    color: white;
  }
`;

interface IEvalutionBox {
  score: number;
  description: string;
  checked: boolean;
  edit: boolean;
  commentId?: number;
  func?: any;
  reRender?: any;
}

const EvaluationBox = observer(
  ({
    score,
    description,
    checked,
    edit,
    commentId,
    func,
    reRender,
  }: IEvalutionBox): JSX.Element => {
    const Location = useLocation();
    const applicantId = Location.pathname.slice(17, Location.pathname.length);

    const [saveComment, setSaveComment] = useState({
      score: 0,
      description: "",
    });

    const [activeBtn, setActiveBtn] = useState(score);

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

    const [commentLength, setCommentLength] = useState(description);

    const TextLengthCheck = (e: any) => {
      setCommentLength(e.target.value);
      setSaveComment({ score: activeBtn, description: e.target.value });
    };

    const addComment = () => {
      if (saveComment.description.length > 0 && saveComment.score > 0) {
        fetch(`${Applicant}/${applicantId}/comments`, {
          method: "POST",
          headers: requestHeaders,
          body: JSON.stringify(saveComment),
        })
          .then(res => res.json())
          .then(res => {
            setActiveBtn(0);
            setCommentLength("");
            reRender();
            alert("Comment 등록이 완료되었습니다.");
          });
      } else if (saveComment.description.length === 0) {
        alert("Comment를 작성해 주세요");
      } else if (saveComment.score === 0) {
        alert("평가 버튼을 선택해주세요");
      }
    };

    const deleteComment = () => {
      fetch(`${Applicant}/${applicantId}/comment/${commentId}`, {
        method: "DELETE",
        headers: requestHeaders,
      })
        .then(res => res.json())
        .then(res => {
          func();
          alert("Comment 삭제가 완료되었습니다.");
        });
    };

    const editComment = () => {
      if (saveComment.description.length > 0 && saveComment.score > 0) {
        fetch(`${Applicant}/${applicantId}/comment/${commentId}`, {
          method: "PATCH",
          headers: requestHeaders,
          body: JSON.stringify(saveComment),
        })
          .then(res => res.json())
          .then(res => {
            func();
            alert("Comment 수정이 완료되었습니다.");
          });
      } else if (saveComment.description.length === 0) {
        alert("Comment를 작성해 주세요");
      } else if (saveComment.score === 0) {
        alert("평가 버튼을 선택해주세요");
      }
    };

    return (
      <EvaluationWrap hidden={checked}>
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
          {edit ? (
            <SubmitBtn onClick={addComment}>제출</SubmitBtn>
          ) : (
            <div>
              <DeleteBtn onClick={deleteComment}>삭제</DeleteBtn>
              <EditBtn onClick={editComment}>수정</EditBtn>
            </div>
          )}
        </SubmitWrap>
      </EvaluationWrap>
    );
  }
);

export default EvaluationBox;
