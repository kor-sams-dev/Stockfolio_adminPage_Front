import { action, observable } from "mobx";

const ApplyMenuStore = observable({
  clicked: "개발",
  viewContent: [],
  totalContent: [],
  setClicked: action((value: string) => {
    ApplyMenuStore.clicked = value;
  }),
  setViewContent: action((data: any) => {
    ApplyMenuStore.viewContent = data;
  }),
  setTotalContent: action((data: any) => {
    ApplyMenuStore.totalContent = data;
  }),
});

export default ApplyMenuStore;
