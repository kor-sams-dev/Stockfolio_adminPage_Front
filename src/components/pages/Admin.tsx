import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { observer } from "mobx-react";

import Inner from "../../styles/Inner";

import Heading2 from "../UI/atoms/texts/Heading2";
import theme from "../../styles/theme";

import { AdminRecruitList } from "../../config";
import AdminDesc from "../templates/AdminDesc";
import AdminApplyNavbar from "../UI/organisms/AdminApplyNavbar";
import requestHeaders from "../../utils/getToken";
import RootStore from "../../stores/RootStore";
import AdminApplicantList from "./AdminApplicantList";
import AdminApplicant from "../templates/AdminApplicant";

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

const Admin = observer((): JSX.Element => {
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
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/admin/applicantlist"
          component={AdminApplicantList}
        />
        <Route
          exact
          path="/admin/applicantlist/:id"
          component={AdminApplicantList}
        />
        <Route exact path="/admin/applicant" component={AdminApplicant} />
        <Route exact path="/admin/applicant/:id" component={AdminApplicant} />
      </Switch>
      <AdminBox>
        <Inner size="narrow">
          <NavWrap>
            <Heading2
              fontColor={theme.color.black}
              fontSize={24}
              fontWeight={700}
            >
              공고내역
            </Heading2>
            <AdminApplyNavbar />
          </NavWrap>
          <Switch>
            <Route exact path="/admin/apply" component={AdminDesc} />
            <Route exact path="/admin/apply/:id" component={AdminDesc} />
            <Route exact path="/admin/apply/:id" component={AdminDesc} />
          </Switch>
        </Inner>
      </AdminBox>
    </BrowserRouter>
  );
});

export default Admin;
