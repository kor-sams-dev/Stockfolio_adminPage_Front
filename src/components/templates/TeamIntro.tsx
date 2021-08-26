import React from "react";
import styled from "styled-components";

import OverViewCard from "../UI/molecules/OverViewCard";
import TeamIntroListBox from "../UI/organisms/TeamIntroListBox";

function TeamIntro(): JSX.Element {
  return (
    <>
      <OverViewCard itemId="스폴러 소개" />
      <TeamIntroListBox />
    </>
  );
}

export default TeamIntro;
