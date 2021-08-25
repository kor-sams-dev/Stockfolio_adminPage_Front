import { action, observable } from "mobx";

const ApplyLabelStore = observable({
  isApplyLabelOn: false,
  setIsApplyLabelOn: action(() => {
    ApplyLabelStore.isApplyLabelOn = !ApplyLabelStore.isApplyLabelOn;
  }),
});

export default ApplyLabelStore;
