import { action, observable } from "mobx";

const StyledAlertStore = observable({
  isAlertOn: false,
  alertType: "applySuccess",
  setIsAlertOn: action(() => {
    StyledAlertStore.isAlertOn = !StyledAlertStore.isAlertOn;
  }),
  setAlertType: action((type: string) => {
    StyledAlertStore.alertType = type;
  }),
});

export default StyledAlertStore;
