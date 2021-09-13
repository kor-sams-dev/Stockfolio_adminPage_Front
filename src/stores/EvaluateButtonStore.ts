import { action, observable } from "mobx";
import { IButtonItem } from "../models/buttonInterface";

const EvaluateButtonStore = observable({
  isChecked: {
    good: false,
    soso: false,
    bad: false,
  },
});

const EvaluateButtonStoreActions = observable({
  setIsChecked: action((name: keyof IButtonItem) => {
    EvaluateButtonStore.isChecked[name] = !EvaluateButtonStore.isChecked[name];
  }),
});

export { EvaluateButtonStore, EvaluateButtonStoreActions };
