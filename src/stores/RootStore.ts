import SlideStore from "./SlideStore";
import ScrollStore from "./ScrollStore";
import { ApplicationStore, ApplicationActions } from "./ApplicationStore";
import MissionStore from "./MissionStore";
import { SelectStore, SelectActions } from "./SelectStore";
import { CheckboxStore, CheckboxActions } from "./CheckboxStore";
import ApplyMenuStore from "./ApplyMenuStore";
import ApplyLabelStore from "./ApplyLabelStore";

const RootStore = () => {
  return {
    SlideStore,
    ScrollStore,
    ApplicationStore,
    ApplicationActions,
    MissionStore,
    SelectStore,
    SelectActions,
    CheckboxStore,
    CheckboxActions,
    ApplyMenuStore,
    ApplyLabelStore,
  };
};

export default RootStore;
