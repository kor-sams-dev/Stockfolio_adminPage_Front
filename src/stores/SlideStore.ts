import { action, observable } from "mobx";

const SlideStore = observable({
  movingUnit: 595,
  slideSpot: 0,
  setSlideSpot: action((value: number) => {
    SlideStore.slideSpot += value;
  }),
});

export default SlideStore;
