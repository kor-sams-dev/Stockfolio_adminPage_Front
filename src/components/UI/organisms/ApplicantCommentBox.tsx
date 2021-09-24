import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { useLocation } from "react-router-dom";

import {
  commentForm,
  IApplicantBasicInfo,
} from "../../../models/AdminAccountInterface";

import EvaluationBox from "../molecules/EvaluationBox";
import ApplicantCommentList from "./ApplicantCommentList";

import requestHeaders from "../../../utils/getToken";
import { Applicant } from "../../../config";

const ListAlert = styled.div`
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
`;

interface IAddData {
  data: IApplicantBasicInfo;
}

const ApplicantCommentBox = observer(({ data }: IAddData): JSX.Element => {
  const Location = useLocation();
  const applicantId = Location.pathname.slice(17, Location.pathname.length);

  const [commentList, setCommentList] = useState(commentForm);
  useEffect(() => {
    fetch(`${Applicant}/${applicantId}/comments`, {
      method: "GET",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(item => {
        setCommentList(item.results);
      });
  }, []);

  const reRender = () => {
    fetch(`${Applicant}/${applicantId}/comments`, {
      method: "GET",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(item => {
        setCommentList(item.results);
      });
  };

  return (
    <>
      <ListAlert>
        {data.userName} 지원자에게 {commentList.comments?.length}개의 코멘트가
        달렸습니다
      </ListAlert>
      <EvaluationBox
        score={0}
        description=""
        checked={false}
        edit
        reRender={reRender}
      />
      {commentList.comments?.map(item => {
        return (
          <ApplicantCommentList
            item={item}
            key={item.updated_at}
            reRender={reRender}
          />
        );
      })}
    </>
  );
});
export default ApplicantCommentBox;
