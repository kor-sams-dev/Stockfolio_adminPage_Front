import React from "react";
import styled from "styled-components";

import ApplyNavBar from "../UI/organisms/ApplyNavBar";
import RecruitList from "../UI/organisms/RecruitList";

const Container = styled.div`
  min-height: calc(100vh - 353px);
`;

function ApplyList(): JSX.Element {
  return (
    <Container>
      <ApplyNavBar />
      <RecruitList />
    </Container>
  );
}

export default ApplyList;
