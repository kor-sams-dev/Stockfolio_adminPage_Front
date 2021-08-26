import SlideStore from "./SlideStore";
import ScrollStore from "./ScrollStore";
import { ApplicationStore, ApplicationActions } from "./ApplicationStore";
import MissionStore from "./MissionStore";
import { SelectStore, SelectActions } from "./SelectStore";
import { CheckboxStore, CheckboxActions } from "./CheckboxStore";
import { ApplyMenuStore, SelectedContent } from "./ApplyMenuStore";
import { UserTokenStore, HandleToken } from "./UserTokenStore";

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
    SelectedContent,
    UserTokenStore,
    HandleToken,
  };
};

export default RootStore;
