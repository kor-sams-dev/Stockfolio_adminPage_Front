import SlideStore from "./SlideStore";
import ScrollStore from "./ScrollStore";
import { ApplicationStore, ApplicationActions } from "./ApplicationStore";
import ApplicationFormStore from "./ApplicationFormStore";
import BasicInfoStore from "./BasicInfoStore";

const RootStore = () => {
  return {
    SlideStore,
    ScrollStore,
    ApplicationStore,
    ApplicationActions,
    ApplicationFormStore,
    BasicInfoStore,
  };
};

export default RootStore;
