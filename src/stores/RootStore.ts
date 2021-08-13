import SlideStore from "./SlideStore";
import ScrollStore from "./ScrollStore";
import ApplicationStore from "./ApplicationStore";

const RootStore = () => {
  return {
    SlideStore,
    ScrollStore,
    ApplicationStore,
  };
};

export default RootStore;
