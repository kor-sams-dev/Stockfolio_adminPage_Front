import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { observer } from "mobx-react";

import theme from "../../../styles/theme";

import RootStore from "../../../stores/RootStore";
import { IDProp } from "../../../models/applyInterfaces";
import requestHeaders from "../../../utils/getToken";
import { NotificationUrl } from "../../../config";

import Heading2 from "../atoms/texts/Heading2";
import Label from "../atoms/Labels/Label";

const ApplyMain = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 0 80px 40px;
  padding: 40px 32px 60px 32px;
  width: 736px;
  border: 1px solid ${theme.color.greyLight2};
  border-radius: 8px;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 16px;
  width: 100%;
`;

const HeadBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const DeadlineWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const Employment = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const Deadline = styled.span`
  margin-left: 8px;
  font-size: 14px;
  font-weight: 400;

  &::before {
    content: "|";
    padding-right: 7px;
  }
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ModRecruitBtn = styled.button`
  margin-top: 8px;
  width: 180px;
  height: 54px;
  border: 1px solid ${theme.color.grey1};
  border-radius: 8px;
  background-color: ${theme.color.white};
  color: ${props =>
    props.isActive ? `${theme.color.lilac}` : `${theme.color.black}`};
  font-size: 14px;
  font-weight: 700;
  cursor: ${props => (props.isActive ? "auto" : "pointer")};
`;

const Sidebutton = styled.div`
  font-size: 14px;
  margin-right: 16px;
  cursor: pointer;
  color: ${theme.color.grey2};
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Sidewrap = styled.div`
  display: flex;

  span {
    font-size: 14px;
    margin-left: 11px;
  }
`;

const NotiText = styled.iframe`
  height: 700px;
  overflow-y: visible;
  margin-top: 40px;
`;

const AdminDescMain = observer((): JSX.Element => {
  const { ApplyMenuStore, SelectedContent } = RootStore();
  const { setSelectedContent } = ApplyMenuStore;
  const params: IDProp = useParams();
  const history = useHistory();

  const deleteNotice = () => {
    fetch(`${NotificationUrl}/${params.id}`, {
      method: "DELETE",
      headers: requestHeaders,
    }).then(res => res.json());
  };

  const onRemove = () => {
    if (window.confirm("정말 삭제합니까?")) {
      deleteNotice();
      alert("삭제되었습니다.");
    } else {
      alert("취소합니다.");
    }
  };

  const applicantmove = () => {
    history.push(`/admin/applicantlist/${params.id}`);
  };

  useEffect(() => {
    fetch(`${NotificationUrl}/${params.id}`, {
      method: "GET",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        setSelectedContent(data.result);
      })
      .catch(error => {
        console.error(error);
      });
  }, [params]);

  return (
    <ApplyMain>
      <Wrap>
        <Label stance={SelectedContent.career_type as "경력" | "신입"} />
        <Sidewrap>
          <Sidebutton>수정</Sidebutton>
          <Sidebutton onClick={onRemove}>삭제</Sidebutton>
          <span>게시자 : {SelectedContent.author}</span>
        </Sidewrap>
      </Wrap>
      <InfoBox>
        <HeadBox>
          <Heading2
            fontColor={theme.color.black}
            fontSize={24}
            fontWeight={700}
          >
            {SelectedContent.position_title}
          </Heading2>
          <DeadlineWrapper>
            <Employment>{SelectedContent.work_type}</Employment>
            <Deadline>{SelectedContent.deadline} 마감</Deadline>
          </DeadlineWrapper>
        </HeadBox>
        <BtnBox>
          {SelectedContent.num_applicants === 0 ? (
            <ModRecruitBtn
              isActive={SelectedContent.num_applicants === 0}
              disabled
            >
              지원자 리스트({SelectedContent.num_applicants})
            </ModRecruitBtn>
          ) : (
            <ModRecruitBtn
              isActive={SelectedContent.num_applicants === 0}
              onClick={applicantmove}
            >
              지원자 리스트({SelectedContent.num_applicants})
            </ModRecruitBtn>
          )}
        </BtnBox>
      </InfoBox>
      <NotiText title="test" srcDoc={SelectedContent.description} />
    </ApplyMain>
  );
});

export default AdminDescMain;
