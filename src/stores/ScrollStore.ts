import { action, observable } from "mobx";

const ScrollStore = observable({
  viewingSectionIdx: 0,
  setViewingSectionIdx: action((value: number) => {
    ScrollStore.viewingSectionIdx += value;
  }),
});

export default ScrollStore;
