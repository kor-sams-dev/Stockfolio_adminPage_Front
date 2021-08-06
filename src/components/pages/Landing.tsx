import React from "react";
import styled from "styled-components";

import LandingMain from "../templates/LandingMain";
import Overview from "../templates/LandingOverview";

function Landing(): JSX.Element {
  return (
    <>
      <LandingMain />
      <Overview />
    </>
  );
}

export default Landing;
