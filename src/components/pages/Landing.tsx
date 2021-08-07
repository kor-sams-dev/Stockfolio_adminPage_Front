import React from "react";

import LandingMain from "../templates/LandingMain";
import Overview from "../templates/LandingOverview";
import PdIntroduce from "../templates/LandingPdIntroduce";
import Mission from "../templates/LandingMission";
import History from "../templates/LandingHistory";
import ScrollNavigator from "../UI/molecules/ScrollNavigator";
import AppDownloadBtn from "../UI/atoms/buttons/AppDownloadBtn";

function Landing(): JSX.Element {
  return (
    <>
      <AppDownloadBtn />
      <ScrollNavigator />
      <LandingMain />
      <Overview />
      <PdIntroduce />
      <Mission />
      <History />
    </>
  );
}

export default Landing;
