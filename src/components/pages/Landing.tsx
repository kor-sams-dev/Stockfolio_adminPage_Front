import React from "react";
// import styled from "styled-components";

import LandingMain from "../templates/LandingMain";
import Overview from "../templates/LandingOverview";
import PdIntroduce from "../templates/LandingPdIntroduce";

function Landing(): JSX.Element {
  return (
    <>
      <LandingMain />
      <Overview />
      <PdIntroduce />
    </>
  );
}

export default Landing;
