import SlideStore from "./SlideStore";
import ScrollStore from "./ScrollStore";
import MissionStore from "./MissionStore";
import ApplyMenuStore from "./ApplyMenuStore";

const RootStore = () => {
  return {
    SlideStore,
    ScrollStore,
    MissionStore,
    ApplyMenuStore,
  };
};

export default RootStore;
