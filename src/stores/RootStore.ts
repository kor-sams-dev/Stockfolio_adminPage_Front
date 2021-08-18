import SlideStore from "./SlideStore";
import ScrollStore from "./ScrollStore";
import ApplicationStore from "./ApplicationStore";
import BasicInfoStore from "./BasicInfoStore";

const RootStore = () => {
  return {
    SlideStore,
    ScrollStore,
    ApplicationStore,
    BasicInfoStore,
  };
};

export default RootStore;
