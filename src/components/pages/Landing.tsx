import React, { useEffect } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

import LandingMain from "../templates/LandingMain";
import Overview from "../templates/LandingOverview";
import PdIntroduce from "../templates/LandingPdIntroduce";
import Mission from "../templates/LandingMission";
import History from "../templates/LandingHistory";
import ScrollNavigator from "../UI/molecules/ScrollNavigator";
import AppDownloadBtn from "../UI/atoms/buttons/AppDownloadBtn";

import RootStore from "../../stores/RootStore";

const { ScrollStore } = RootStore();

interface EventProps {
  viewingSectionIdx: number;
}

const ViewingSection = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const Box = styled.div`
  margin-top: ${({ viewingSectionIdx }: EventProps) =>
    `${viewingSectionIdx * 100}vh`};
  transition: margin-top 1s ease-out;
`;

const handleScroll = (e: any) => {
  if (e.wheelDelta > 0) {
    if (ScrollStore.viewingSectionIdx === 0) return;
    ScrollStore.setViewingSectionIdx(1);
  }
  if (e.wheelDelta < 0) {
    if (ScrollStore.viewingSectionIdx === -4) return;
    ScrollStore.setViewingSectionIdx(-1);
  }
};

const Landing = observer(() => {
  useEffect(() => {
    window.addEventListener("mousewheel", handleScroll);
  }, []);

  return (
    <ViewingSection>
      <Box viewingSectionIdx={ScrollStore.viewingSectionIdx}>
        <AppDownloadBtn />
        <ScrollNavigator />
        <LandingMain />
        <Overview />
        <PdIntroduce />
        <Mission />
        <History />
      </Box>
    </ViewingSection>
  );
});

export default Landing;
