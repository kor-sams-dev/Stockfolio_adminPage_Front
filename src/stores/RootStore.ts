import SlideStore from "./SlideStore";
import ScrollStore from "./ScrollStore";
import {
  ApplicationStore,
  ApplicationActions,
  ApplicationListStore,
} from "./ApplicationStore";
import MissionStore from "./MissionStore";
import { SelectStore, SelectActions } from "./SelectStore";
import { CheckboxStore, CheckboxActions } from "./CheckboxStore";
import ApplyMenuStore from "./ApplyMenuStore";
import StyledAlertStore from "./StyledAlertStore";

const RootStore = () => {
  return {
    SlideStore,
    ScrollStore,
    ApplicationStore,
    ApplicationListStore,
    ApplicationActions,
    MissionStore,
    SelectStore,
    SelectActions,
    CheckboxStore,
    CheckboxActions,
    ApplyMenuStore,
    StyledAlertStore,
  };
};

export default RootStore;
