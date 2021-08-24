import SlideStore from "./SlideStore";
import ScrollStore from "./ScrollStore";
import {
  ApplicationStore,
  ApplicationActions,
  ResumeStore,
  ResumeListStore,
} from "./ApplicationStore";
import MissionStore from "./MissionStore";
import { SelectStore, SelectActions } from "./SelectStore";
import { CheckboxStore, CheckboxActions } from "./CheckboxStore";
import ApplyMenuStore from "./ApplyMenuStore";

const RootStore = () => {
  return {
    SlideStore,
    ScrollStore,
    // ApplicationStore,
    ResumeStore,
    ResumeListStore,
    ApplicationActions,
    MissionStore,
    SelectStore,
    SelectActions,
    CheckboxStore,
    CheckboxActions,
    ApplyMenuStore,
  };
};

export default RootStore;
