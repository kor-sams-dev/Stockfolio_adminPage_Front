import { action, observable } from "mobx";

type SortType = "career" | "project";

const ApplicationStore = observable({
  career: 1,
  project: 1,
  setUnit: action((sort: SortType) => {
    ApplicationStore[sort] += 1;
  }),
});

export default ApplicationStore;
