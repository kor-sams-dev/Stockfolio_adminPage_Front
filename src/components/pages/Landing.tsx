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
  // if (window.scrollY < ScrollStore.prevScrollY) {
  //   if (ScrollStore.viewingSectionIdx === 0) return;
  //   ScrollStore.setViewingSectionIdx(-1);
  // } else if (window.scrollY > ScrollStore.prevScrollY) {
  //   if (ScrollStore.viewingSectionIdx === 4) return;
  //   ScrollStore.setViewingSectionIdx(1);
  // }
  // window.scrollTo({
  //   top: ScrollStore.viewingSectionIdx * window.innerHeight,
  //   behavior: "smooth",
  // });
  // ScrollStore.setPrevScrollY(window.scrollY);
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
