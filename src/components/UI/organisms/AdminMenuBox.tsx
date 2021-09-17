import styled from "styled-components";
import { useEffect } from "react";
import { observer } from "mobx-react";
import theme from "../../../styles/theme";

import AdminMenuboxStore from "../../../stores/AdminMenuboxStore";

const Admin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const AdminBox = styled.div`
  width: 212px;
  height: 140px;
  margin-top: 40px;
  border: 1px solid ${theme.color.greyLight2};
  margin-right: 16px;
  margin-bottom: 60px;
  border-radius: 8px;
`;

const StringSpan = styled.div`
  font-weight: 400;
  color: ${theme.color.black};
  margin: 16px 0px 0px 20px;
  font-size: 16px;
`;

const NumberSpan = styled.div`
  font-weight: 700;
  color: ${theme.color.mainDeep};
  font-size: 40px;
  text-align: right;
  margin: 39px 24px 24px 0px;
`;

const AdminMenuBox = observer((): JSX.Element => {
  const { setMenu } = AdminMenuboxStore;
  const requestHeaders: HeadersInit = new Headers();

  requestHeaders.set("Content-Type", "application/json");
  requestHeaders.set(
    "Authorization",
    sessionStorage
      ?.getItem("TOKEN")
      ?.slice(0, sessionStorage.getItem("TOKEN")!.length) || "no token"
  );

  useEffect(() => {
    fetch("http://192.168.35.101:8000/recruits/admin/dashboard", {
      method: "GET",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        setMenu(data.results);
        console.log(data.results);
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
