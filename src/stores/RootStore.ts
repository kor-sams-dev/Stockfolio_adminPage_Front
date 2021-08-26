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
import { ApplyMenuStore, SelectedContent } from "./ApplyMenuStore";
import StyledAlertStore from "./StyledAlertStore";

import { UserTokenStore, HandleToken } from "./UserTokenStore";

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
    SelectedContent,
    UserTokenStore,
    HandleToken,
  };
};

export default RootStore;
