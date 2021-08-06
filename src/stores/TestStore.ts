import { action, makeObservable, observable } from "mobx";
// import { autobind } from "core-decorators";

// @autobind
class CountStore {
  constructor() {
    makeObservable(this);
  }

  @observable count = 5;

  @action
  handleReset = (): void => {
    this.count = 0;
  };

  @action
  handleCount = (t: number): void => {
    this.count = t;
  };

  // @action
  // handleCount = (change: number): void => {
  //   this.count = 0;
  // };
}

export default CountStore;
