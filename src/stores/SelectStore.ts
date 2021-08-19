import { action, observable } from "mobx";

const SelectStore = observable({
  isListOn: false,
  setIsListOn: action(() => {
    SelectStore.isListOn = !SelectStore.isListOn;
  }),
});

export default SelectStore;
