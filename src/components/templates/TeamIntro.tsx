import React from "react";
import styled from "styled-components";

import Inner from "../../styles/Inner";
import OverViewCard from "../UI/molecules/OverViewCard";
import TeamIntroListBox from "../UI/organisms/TeamIntroListBox";

function TeamIntro(): JSX.Element {
  return (
    <Inner size="narrow">
      <OverViewCard />
      <TeamIntroListBox />
    </Inner>
  );
}

export default TeamIntro;
