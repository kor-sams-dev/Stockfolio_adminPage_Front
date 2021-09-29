import React, { useEffect } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import theme from "../../styles/theme";
import Inner from "../../styles/Inner";

import RootStore from "../../stores/RootStore";
import { AdminRecruitList } from "../../config";
import requestHeaders from "../../utils/getToken";

import AdminApplyNavbar from "../UI/organisms/AdminApplyNavbar";
import Heading2 from "../UI/atoms/texts/Heading2";
import AdminNotice from "../UI/organisms/AdminNotice";

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

  useEffect(() => {
    fetch(AdminRecruitList, {
      method: "GET",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        setTotalContentAdmin(data.results);
        setViewContentAdmin(data.results);
        setClickedAdmin("전체");
      })
      .catch(error => {
        console.error(error);
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
