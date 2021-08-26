import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Recruits } from "../../config";

import ApplyNavBar from "../UI/organisms/ApplyNavBar";
import RecruitList from "../UI/organisms/RecruitList";
import ApplyDesc from "./ApplyDesc";

import RootStore from "../../stores/RootStore";
import ApplyForm from "./ApplyForm";
import Application from "../pages/Application";

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
    fetch(Recruits)
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
        <Switch>
          <Route
            exact
            path={["/recruit", "/recruit/apply", "/recruit/apply/:id"]}
            component={ApplyNavBar}
          />
        </Switch>
        <Switch>
          <Route exact path="/recruit" component={RecruitList} />
          <Route exact path="/recruit/apply" component={RecruitList} />
          <Route exact path="/recruit/apply/:id" component={ApplyDesc} />
          <Route
            exact
            path="/recruit/apply/:id/register"
            component={ApplyForm}
          />
          <Route exact path="/recruit/apply/:id/modify" component={ApplyForm} />
          <Route
            exact
            path="/recruit/apply/:id/resume"
            component={Application}
          />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default ApplyList;
