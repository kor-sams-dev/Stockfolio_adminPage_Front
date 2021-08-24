import React from "react";
import styled from "styled-components";

import RecruitProcess from "./RecruitProcess";

const RecruitBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function RecruitInfo(): JSX.Element {
  return (
    <RecruitBox>
      <RecruitProcess />
    </RecruitBox>
  );
}

export default RecruitInfo;
