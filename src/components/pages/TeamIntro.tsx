import React from "react";
import styled from "styled-components";

import RecruitMenuBar from "../UI/organisms/RecruitMenuBar";
import Inner from "../../styles/Inner";
import ApplyList from "../templates/ApplyList";
import ApplyDesc from "../templates/ApplyDesc";
import ApplyForm from "../templates/ApplyForm";
import OverViewCard from "../UI/molecules/OverViewCard";
import TeamIntroListBox from "../UI/organisms/TeamIntroListBox";

const TeamIntroBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function TeamIntro(): JSX.Element {
  return (
    <TeamIntroBox>
      <RecruitMenuBar />
      <Inner size="narrow">
        <ApplyList />
        {/* <ApplyDesc /> */}
        {/* <ApplyForm /> */}
        {/* <OverViewCard /> */}
        {/* <TeamIntroListBox /> */}
      </Inner>
    </TeamIntroBox>
  );
}

export default TeamIntro;
