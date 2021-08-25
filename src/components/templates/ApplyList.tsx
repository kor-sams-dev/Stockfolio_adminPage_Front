import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ApplyNavBar from "../UI/organisms/ApplyNavBar";
import RecruitList from "../UI/organisms/RecruitList";
import ApplyDesc from "./ApplyDesc";

import recruitListItemData from "../../assets/data/mockData/recruitListItemData";
import RootStore from "../../stores/RootStore";

const Container = styled.div`
  min-height: calc(100vh - 353px);
`;

function ApplyList(): JSX.Element {
  const { ApplyMenuStore } = RootStore();
  const { setClicked, setViewContent, setTotalContent } = ApplyMenuStore;

  useEffect(() => {
    const isDev = (arr: any) => {
      if (arr.position === "개발") {
        return true;
      }
      return false;
    };
    fetch("http://192.168.35.119:8000/recruits")
      .then(res => res.json())
      .then(data => {
        setTotalContent(data.results);
        setViewContent(data.results.filter(isDev));
        setClicked("개발");
      });
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <ApplyNavBar />
        <Switch>
          <Route exact path="/recruit" component={RecruitList} />
          <Route exact path="/recruit/apply" component={RecruitList} />
          <Route path="/recruit/apply/:id" component={ApplyDesc} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default ApplyList;
