import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";

import Inner from "../../styles/Inner";
import theme from "../../styles/theme";

import { RecruitAdmin } from "../../config";
import {
  INotificationList,
  notificationDataForm,
} from "../../models/AdminNotificationInterface";
import requestHeaders from "../../utils/getToken";

import Heading2 from "../UI/atoms/texts/Heading2";
import Label from "../UI/atoms/Labels/Label";

const Box = styled.section`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  background: ${theme.color.white};
  padding-top: 100px;
`;

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

const NewNorificationBtn = styled.button`
  padding: 16px 35px;
  border-radius: 10px;
  background-color: ${theme.color.main};
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const ListSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  margin-top: 20px;
  border-radius: 10px;

  &:hover {
    background-color: ${theme.color.greyLight1};
  }
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LabelBox = styled.div`
  position: relative;
  left: 0;
  margin-right: 30px;
`;

const Sort = styled.span`
  font-size: 10px;

  & + span {
    position: relative;
    padding-left: 24px;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 12px;
      transform: translateY(-50%);
      height: 10px;
      border-left: 1px solid ${theme.color.black};
    }
  }
`;

const VolunteerListBtn = styled.button<{ isActive: boolean }>`
  border: 1px solid ${theme.color.grey1};
  border-radius: 10px;
  margin-left: 30px;
  padding: 11px 13px;
  color: ${props =>
    props.isActive ? `${theme.color.lilac}` : `${theme.color.black}`};
  cursor: ${props => (props.isActive ? "auto" : "pointer")};

  &:hover {
    background-color: ${theme.color.greyLight1};
  }
`;

const AdminNotification = observer((): JSX.Element => {
  const [notiData, setNotiData] = useState(notificationDataForm);

  useEffect(() => {
    fetch(`${RecruitAdmin}/my`, {
      method: "GET",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        setNotiData(data);
      });
  }, []);

  const history = useHistory();
  const uploadNoti = () => {
    history.push("/admin/notification/write");
  };

  return (
    <Box>
      <Inner size="wide">
        <HeaderWrap>
          <Heading2 fontWeight={700} fontSize={24}>
            내가 올린 공고
          </Heading2>
          <NewNorificationBtn onClick={uploadNoti}>
            새로운 공고 올리기
          </NewNorificationBtn>
        </HeaderWrap>
        {notiData.results.map((list: INotificationList) => {
          return (
            <ListSection key={list.id}>
              <TitleWrap
                onClick={() => {
                  history.push(`/admin/apply/${list.id}`);
                }}
              >
                <LabelBox>
                  <Label stance={list.career_type as "경력" | "신입"} />
                </LabelBox>
                <Heading2 fontSize={18} fontWeight={700}>
                  {list.position_title}
                </Heading2>
              </TitleWrap>
              <div>
                <Sort>{list.work_type}</Sort>
                <Sort>{list.deadline} 마감</Sort>
                {list.applicants_num === 0 ? (
                  <VolunteerListBtn
                    isActive={list.applicants_num === 0}
                    disabled
                  >
                    지원자 리스트({list.applicants_num})
                  </VolunteerListBtn>
                ) : (
                  <VolunteerListBtn
                    isActive={list.applicants_num === 0}
                    onClick={() => {
                      history.push(`/admin/applicantlist/${list.id}`);
                    }}
                  >
                    지원자 리스트({list.applicants_num})
                  </VolunteerListBtn>
                )}
              </div>
            </ListSection>
          );
        })}
      </Inner>
    </Box>
  );
});

export default AdminNotification;
