import { action, observable } from "mobx";
import { ICheckboxItem } from "../models/InputsInterfaces";

const CheckboxStore = observable({
  isChecked: {
    career: false,
    project: false,
  },
});

const CheckboxActions = observable({
  setIsChecked: action((name: keyof ICheckboxItem) => {
    CheckboxStore.isChecked[name] = !CheckboxStore.isChecked[name];
  }),
});

export { CheckboxStore, CheckboxActions };
