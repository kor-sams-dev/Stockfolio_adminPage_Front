import { action, observable } from "mobx";

const MissionStore = observable({
  isActive: false,
  setIsActive: action(() => {
    MissionStore.isActive = !MissionStore.isActive;
  }),
});

export default MissionStore;
