import { action, observable } from "mobx";
import { autobind } from "core-decorators";

@autobind
class CountStore {
  @observable count = 5;

  @action
  handleCount = (change: number): void => {
    this.count = change;
  };
}

export default CountStore;
