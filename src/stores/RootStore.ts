import SlideStore from "./SlideStore";
import ScrollStore from "./ScrollStore";
import MissionStore from "./MissionStore";

const RootStore = () => {
  return {
    SlideStore,
    ScrollStore,
    MissionStore,
  };
};

export default RootStore;
