import React from "react";
import styled from "styled-components";

import RecruitProcess from "../templates/RecruitProcess";

import RecruitMenuBar from "../UI/organisms/RecruitMenuBar";

const RecruitBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function RecruitInfo(): JSX.Element {
  return (
    <RecruitBox>
      <RecruitMenuBar />
      <RecruitProcess />
    </RecruitBox>
  );
}

export default RecruitInfo;
