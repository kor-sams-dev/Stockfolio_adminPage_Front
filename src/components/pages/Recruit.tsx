import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import RecruitMenuBar from "../UI/organisms/RecruitMenuBar";
import Inner from "../../styles/Inner";
import ApplyList from "../templates/ApplyList";
import RecruitProcess from "../templates/RecruitProcess";
import TeamIntro from "../templates/TeamIntro";
import ApplyForm from "../templates/ApplyForm";
import Application from "./Application";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function Recruit(): JSX.Element {
  return (
    <BrowserRouter>
      <Box>
        <RecruitMenuBar />
        <Inner size="narrow">
          <Switch>
            <Route exact path="/recruit" component={ApplyList} />
            <Route exact path="/recruit/apply" component={ApplyList} />
            <Route exact path="/recruit/apply/:id" component={ApplyList} />
            <Route
              exact
              path="/recruit/apply/:id/register"
              component={ApplyForm}
            />
            <Route
              exact
              path="/recruit/apply/:id/modify"
              component={ApplyForm}
            />
            <Route
              exact
              path="/recruit/apply/:id/resume"
              component={Application}
            />
            <Route exact path="/recruit/process" component={RecruitProcess} />
            <Route exact path="/recruit/team" component={TeamIntro} />
          </Switch>
        </Inner>
      </Box>
    </BrowserRouter>
  );
}

export default Recruit;
