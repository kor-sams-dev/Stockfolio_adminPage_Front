import { action, observable } from "mobx";

const ScrollStore = observable({
  viewingSectionIdx: 0,
  prevScrollY: 0,
  setViewingSectionIdx: action((value: number) => {
    ScrollStore.viewingSectionIdx = value;
  }),
  setPrevScrollY: action((value: number) => {
    ScrollStore.prevScrollY = value;
  }),
});

export default ScrollStore;
