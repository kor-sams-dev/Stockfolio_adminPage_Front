import React from "react";
import styled from "styled-components";

import RecruitProcess from "../templates/RecruitProcess";
import TeamIntro from "../templates/TeamIntro";

import RecruitMenuBar from "../UI/organisms/RecruitMenuBar";

const RecruitBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function Recruit(): JSX.Element {
  return (
    <RecruitBox>
      <RecruitMenuBar />
      <RecruitProcess />
      {/* <TeamIntro /> */}
    </RecruitBox>
  );
}

export default Recruit;
