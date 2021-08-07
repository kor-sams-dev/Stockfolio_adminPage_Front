import React from "react";
// import styled from "styled-components";

import LandingMain from "../templates/LandingMain";
import Mission from "../templates/LandingMission";
import Overview from "../templates/LandingOverview";
import PdIntroduce from "../templates/LandingPdIntroduce";

function Landing(): JSX.Element {
  return (
    <>
      <LandingMain />
      <Overview />
      <PdIntroduce />
      <Mission />
    </>
  );
}

export default Landing;
