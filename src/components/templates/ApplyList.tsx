import React, { useState } from "react";
import styled from "styled-components";

import ApplyNavBar from "../UI/organisms/ApplyNavBar";
import RecruitList from "../UI/organisms/RecruitList";

const Container = styled.div`
  min-height: calc(100vh - 353px);
`;

const [clicked, setClicked] = useState(0);

function ApplyList(): JSX.Element {
  return (
    <Container>
      <ApplyNavBar clicked={clicked} setClicked={setClicked} />
      <RecruitList />
    </Container>
  );
}

export default ApplyList;
