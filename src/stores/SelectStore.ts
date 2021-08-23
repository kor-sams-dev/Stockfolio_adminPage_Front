import { action, observable } from "mobx";
import { ISelectList, ISelectListItem } from "../models/InputsInterfaces";

const SelectStore: ISelectList = observable({
  isListOn: {
    background: false,
    graduateState: false,
  },
});

const SelectActions = observable({
  setIsListOn: action((name: keyof ISelectListItem) => {
    SelectStore.isListOn[name] = !SelectStore.isListOn[name];
  }),
});

export { SelectStore, SelectActions };
