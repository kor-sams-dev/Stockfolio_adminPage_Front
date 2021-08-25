import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation, useHistory } from "react-router-dom";

import RecruitListItem from "../molecules/RecruitListItem";

const RecruitListBox = styled.ul`
  margin-bottom: 60px;
`;

function RecruitList(): JSX.Element {
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (location.pathname === "/recruit") {
      history.push("/recruit/apply");
    }
  }, []);
  return (
    <RecruitListBox>
      <RecruitListItem />
    </RecruitListBox>
  );
}

export default RecruitList;
