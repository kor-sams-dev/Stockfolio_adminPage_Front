import React, { useEffect } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import { observer } from "mobx-react";

import Inner from "../../styles/Inner";

import Heading2 from "../UI/atoms/texts/Heading2";
import theme from "../../styles/theme";

import { RecruitAdmin } from "../../config";
import AdminDesc from "../templates/AdminDesc";
import AdminApplyNavbar from "../UI/organisms/AdminApplyNavbar";
import requestHeaders from "../../utils/getToken";
import RootStore from "../../stores/RootStore";

const AdminBox = styled.section`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
  width: 100%;
  height: 100vh;
  background: ${theme.color.white};
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
    fetch(RecruitAdmin, {
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
            공고내역
          </Heading2>
          <AdminApplyNavbar />
        </NavWrap>
        <Switch>
          <Route exact path="/admin/apply" component={AdminDesc} />
          <Route exact path="/admin/apply/:id" component={AdminDesc} />
        </Switch>
      </Inner>
    </AdminBox>
  );
});

export default Admin;
