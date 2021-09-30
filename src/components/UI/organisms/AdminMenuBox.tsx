import styled from "styled-components";
import { useEffect } from "react";
import { observer } from "mobx-react";

import theme from "../../../styles/theme";

import AdminMenuboxStore from "../../../stores/AdminMenuboxStore";
import requestHeaders from "../../../utils/getToken";
import { RecruitAdmin } from "../../../config";

const Admin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const AdminBox = styled.div`
  margin: 40px 16px 60px auto;
  width: 212px;
  height: 140px;
  border: 1px solid ${theme.color.greyLight2};
  border-radius: 8px;
`;

const StringSpan = styled.div`
  margin: 16px 0px 0px 20px;
  font-size: 16px;
  font-weight: 400;
  color: ${theme.color.black};
`;

const NumberSpan = styled.div`
  margin: 39px 24px 24px 0px;
  text-align: right;
  font-size: 40px;
  font-weight: 700;
  color: ${theme.color.mainDeep};
`;

const AdminMenuBox = observer((): JSX.Element => {
  const { setMenu } = AdminMenuboxStore;

  useEffect(() => {
    fetch(`${RecruitAdmin}/number`, {
      method: "GET",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        setMenu(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Admin>
      <AdminBox>
        <StringSpan>오늘의 지원자</StringSpan>
        <NumberSpan>{AdminMenuboxStore.today_applicant}</NumberSpan>
      </AdminBox>
      <AdminBox>
        <StringSpan>진행중인 공고</StringSpan>
        <NumberSpan>{AdminMenuboxStore.progress_recruit}</NumberSpan>
      </AdminBox>
      <AdminBox>
        <StringSpan>새로 등록된 공고</StringSpan>
        <NumberSpan>{AdminMenuboxStore.new_recruit}</NumberSpan>
      </AdminBox>
      <AdminBox>
        <StringSpan>곧 마감될 공고</StringSpan>
        <NumberSpan>{AdminMenuboxStore.deadline_recruit}</NumberSpan>
      </AdminBox>
    </Admin>
  );
});

export default AdminMenuBox;
