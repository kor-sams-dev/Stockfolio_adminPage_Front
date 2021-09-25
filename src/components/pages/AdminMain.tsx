import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import theme from "../../styles/theme";
import Inner from "../../styles/Inner";
import { Recruits } from "../../config";
import RootStore from "../../stores/RootStore";

import AdminMenuBox from "../UI/organisms/AdminMenuBox";
import AdminNotice from "../UI/organisms/AdminNotice";
import AdminMenuApplicant from "../UI/organisms/AdminMenuApplicant";
import AdminApplicantStore from "../../stores/AdminApplicantStore";

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

  // const login = sessionStorage.setItem(
  //   "login",
  //   " eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiYWRtaW4ifQ.-Pea-liRXYLQ5sYBSgNpT3h6VaMJ7tJ66LePoQakHj4"
  // );

  const requestHeaders: HeadersInit = new Headers();

  requestHeaders.set("Content-Type", "application/json");
  requestHeaders.set(
    "Authorization",
    sessionStorage
      ?.getItem("login")
      ?.slice(0, sessionStorage.getItem("login")!.length) || "no token"
  );

  useEffect(() => {
    // fetch(Recruits)
    //   .then(res => res.json())
    //   .then(data => {
    //     setTotalContentAdmin(data.results);
    //     // setViewContent(data.results.slice(0, 2));
    //     setViewContentAdmin(data.results.slice(0, 4));
    //     setClickedAdmin("전체");
    //   });

    fetch("http://192.168.35.101:8000/recruits/admin/recruit-list", {
      method: "GET",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        setTotalContentAdmin(data.results);
        // setViewContent(data.results.slice(0, 2));
        setViewContentAdmin(data.results.slice(0, 4));
        setClickedAdmin("전체");
      });

    fetch("http://10.58.1.177:8000/applications", {
      method: "GET",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        setApplicant(data.results.slice(0, 4));
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
