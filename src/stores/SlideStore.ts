import { action, observable } from "mobx";

const SlideStore = observable({
  slideSpot: 0,
  setSlideSpot: action((value: number) => {
    SlideStore.slideSpot = value;
  }),
});

export default SlideStore;
