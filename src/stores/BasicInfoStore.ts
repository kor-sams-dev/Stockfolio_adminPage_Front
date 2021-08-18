import { action, observable } from "mobx";

const BasicInfoStore = observable({
  userName: null,
  email: null,
  phoneNumber: null,
  setBasicInfo: action((e: any) => {
    const { name, value } = e.target;
    // BasicInfoStore[name] = value;
  }),
});

export default BasicInfoStore;
