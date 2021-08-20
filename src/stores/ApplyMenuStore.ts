import { action, observable } from "mobx";

const ApplyMenuStore = observable({
  clicked: 0,
  setClicked: action((value: number) => {
    ApplyMenuStore.clicked = value;
  }),
});

export default ApplyMenuStore;
