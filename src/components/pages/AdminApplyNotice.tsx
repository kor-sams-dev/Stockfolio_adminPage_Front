import styled from "styled-components";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import theme from "../../styles/theme";
import Heading2 from "../UI/atoms/texts/Heading2";
import Inner from "../../styles/Inner";
import { Recruits } from "../../config";
import RootStore from "../../stores/RootStore";
import AdminApplyNavbar from "../UI/organisms/AdminApplyNavbar";

import AdminNotice from "../UI/organisms/AdminNotice";
import { ApplyMenuStore } from "../../stores/ApplyMenuStore";

const AdminBox = styled.section`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  background: ${theme.color.white};
  padding-top: 80px;
`;

const NavWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AdminApplyNotice = observer((): JSX.Element => {
  const { AdminApplyMenuStore } = RootStore();
  const { setClickedAdmin, setViewContentAdmin, setTotalContentAdmin } =
    AdminApplyMenuStore;

  const requestHeaders: HeadersInit = new Headers();

  requestHeaders.set("Content-Type", "application/json");
  requestHeaders.set(
    "Authorization",
    sessionStorage
      ?.getItem("TOKEN")
      ?.slice(0, sessionStorage.getItem("TOKEN")!.length) || "no token"
  );

  useEffect(() => {
    fetch("http://192.168.35.101:8000/recruits/admin", {
      method: "GET",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        setTotalContentAdmin(data.results);
        // setViewContent(data.results.slice(0, 2));
        setViewContentAdmin(data.results);
        setClickedAdmin("전체");
      });
  }, []);

  return (
    <AdminBox>
      <Inner size="narrow">
        <NavWrap>
          <Heading2
            fontColor={theme.color.black}
            fontSize={24}
            fontWeight={700}
          >
            채용공고
          </Heading2>
          <AdminApplyNavbar />
        </NavWrap>
        <AdminNotice />
      </Inner>
    </AdminBox>
  );
});

export default AdminApplyNotice;
