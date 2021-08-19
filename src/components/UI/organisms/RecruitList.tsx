import React from "react";
import styled from "styled-components";

import RecruitListItem from "../molecules/RecruitListItem";

const RecruitListBox = styled.ul`
  margin-bottom: 60px;
`;

function RecruitList(): JSX.Element {
  return (
    <RecruitListBox>
      <RecruitListItem />
    </RecruitListBox>
  );
}

export default RecruitList;
