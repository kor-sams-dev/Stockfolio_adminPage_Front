import React, { useEffect } from "react";
import { observer } from "mobx-react";
import _ from "lodash";

import ScrollNavigator from "../UI/molecules/ScrollNavigator";
import LandingMain from "../templates/LandingMain";
import Overview from "../templates/LandingOverview";
import PdIntroduce from "../templates/LandingPdIntroduce";
import Mission from "../templates/LandingMission";
import History from "../templates/LandingHistory";

import RootStore from "../../stores/RootStore";

const { ScrollStore } = RootStore();

const handleScroll = () => {
  console.log("scrolled");
};

const Landing = observer(() => {
  useEffect(() => {
    window.addEventListener(
      "scroll",
      _.debounce(handleScroll, 300, { trailing: false, leading: true })
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ScrollNavigator />
      <div>
        <LandingMain />
        <Overview />
        <PdIntroduce />
        <Mission />
        <History />
      </div>
    </>
  );
});

export default Landing;
