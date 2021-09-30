import React, { useEffect } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import theme from "../../styles/theme";
import Inner from "../../styles/Inner";

import RootStore from "../../stores/RootStore";
import AdminApplicantStore from "../../stores/AdminApplicantStore";
import requestHeaders from "../../utils/getToken";
import { RecruitAdmin, ApplicationsAdmin } from "../../config";

import AdminMenuBox from "../UI/organisms/AdminMenuBox";
import AdminNotice from "../UI/organisms/AdminNotice";
import AdminMenuApplicant from "../UI/organisms/AdminMenuApplicant";

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
    fetch(`${RecruitAdmin}/list`, {
      method: "GET",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        setTotalContentAdmin(data.results);
        setViewContentAdmin(data.results.slice(0, 5));
        setClickedAdmin("전체");
      })
      .catch(error => {
        console.error(error);
      });

    fetch(`${ApplicationsAdmin}/recent`, {
      method: "GET",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        setApplicant(data.results);
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
