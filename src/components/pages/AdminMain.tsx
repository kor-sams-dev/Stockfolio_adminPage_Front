import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import theme from "../../styles/theme";
import Inner from "../../styles/Inner";
import { AdminRecruitList } from "../../config";
import RootStore from "../../stores/RootStore";

import AdminMenuBox from "../UI/organisms/AdminMenuBox";
import AdminNotice from "../UI/organisms/AdminNotice";
import AdminMenuApplicant from "../UI/organisms/AdminMenuApplicant";
import AdminApplicantStore from "../../stores/AdminApplicantStore";
import requestHeaders from "../../utils/getToken";

const Box = styled.section`
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

const AdminMain = observer((): JSX.Element => {
  const { AdminApplyMenuStore } = RootStore();
  const { setClickedAdmin, setViewContentAdmin, setTotalContentAdmin } =
    AdminApplyMenuStore;
  const { setApplicant } = AdminApplicantStore;

  useEffect(() => {
    fetch(AdminRecruitList, {
      method: "GET",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        setTotalContentAdmin(data.results);
        setViewContentAdmin(data.results.slice(0, 4));
        setClickedAdmin("전체");
      })
      .catch(error => {
        console.error(error);
      });

    fetch("http://192.168.35.4:7800/applications/admin/applicator", {
      method: "GET",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        setApplicant(data.results);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Box>
      <Inner size="wide">
        <AdminMenuBox />
        <AdminNotice />
        <AdminMenuApplicant />
      </Inner>
    </Box>
  );
});

export default AdminMain;
