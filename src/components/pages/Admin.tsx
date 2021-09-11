import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Inner from "../../styles/Inner";

import ApplyNavBar from "../UI/organisms/ApplyNavBar";

import Heading2 from "../UI/atoms/texts/Heading2";
import theme from "../../styles/theme";
import { ApplyMenuStore } from "../../stores/ApplyMenuStore";
import { Recruits } from "../../config";
import AdminDesc from "../templates/AdminDesc";

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

function Admin(): JSX.Element {
  const { setClicked, setViewContent, setTotalContent } = ApplyMenuStore;

  useEffect(() => {
    const isDev = (arr: any) => {
      if (arr.position === "개발") {
        return true;
      }
      return false;
    };
    fetch(Recruits)
      .then(res => res.json())
      .then(data => {
        setTotalContent(data.results);
        setViewContent(data.results);
        // setViewContent(data.results.filter(isDev));
        setClicked("전체");
      });
  }, []);

  return (
    <BrowserRouter>
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
            <ApplyNavBar />
          </NavWrap>
          <Switch>
            <Route exact path="/admin" component={AdminDesc} />
            <Route exact path="/admin/:id" component={AdminDesc} />
          </Switch>
        </Inner>
      </AdminBox>
    </BrowserRouter>
  );
}

export default Admin;
