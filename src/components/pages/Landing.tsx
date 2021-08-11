import React, { useEffect } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import _ from "lodash";

import ScrollNavigator from "../UI/molecules/ScrollNavigator";
import LandingMain from "../templates/LandingMain";
import Overview from "../templates/LandingOverview";
import PdIntroduce from "../templates/LandingPdIntroduce";
import Mission from "../templates/LandingMission";
import History from "../templates/LandingHistory";
import LandingFooter from "../templates/LandingFooter";

import RootStore from "../../stores/RootStore";

const { ScrollStore } = RootStore();

interface EventProps {
  viewingSectionIdx: number;
}

const Box = styled.div`
  transition: margin-top 0.5s ease-in-out;
`;

const Landing = observer(() => {
  return (
    <>
      <Box>
        <ScrollNavigator />
        <LandingMain />
        <Overview />
        <PdIntroduce />
        <Mission />
      </Box>
      <History />
      <LandingFooter />
    </>
  );
});

export default Landing;
