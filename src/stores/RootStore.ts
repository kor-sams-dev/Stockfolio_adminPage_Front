import SlideStore from "./SlideStore";
import ScrollStore from "./ScrollStore";
import { ApplicationStore, ApplicationActions } from "./ApplicationStore";
import ApplicationFormStore from "./ApplicationFormStore";
import BasicInfoStore from "./BasicInfoStore";
import MissionStore from "./MissionStore";

const RootStore = () => {
  return {
    SlideStore,
    ScrollStore,
    ApplicationStore,
    ApplicationActions,
    ApplicationFormStore,
    BasicInfoStore,
    MissionStore,
  };
};

export default RootStore;
