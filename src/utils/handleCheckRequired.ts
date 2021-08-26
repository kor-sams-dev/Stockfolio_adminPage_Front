import { toJS } from "mobx";
import RootStore from "../stores/RootStore";

const { ApplicationStore, ApplicationListStore, CheckboxStore } = RootStore();

const handleCheckRequired = (): boolean => {
  const requiredInput = ["basicInfo"];

  const convertedStore = toJS(ApplicationStore);
  const convertedListStore = toJS(ApplicationListStore);

  let careerValueState = false;
  let projectValueState = false;
  let portfolioValueState = false;

  const inputValues = Object.entries(convertedStore)
    .filter(el => requiredInput.includes(el[0]))
    .flatMap(el => el[1])
    .flatMap(value => Object.values(value));

  if (CheckboxStore.isChecked.career) {
    careerValueState = true;
  } else {
    careerValueState = convertedListStore.career
      .flatMap(el => Object.values(el))
      .every(value => value !== "");
  }

  if (CheckboxStore.isChecked.project) {
    projectValueState = true;
  } else {
    projectValueState = convertedListStore.project
      .flatMap(el => Object.values(el))
      .every(value => value !== "");
  }

  if (
    ApplicationStore.portfolio.portfolioUrl ||
    ApplicationStore.file.portfolio
  ) {
    portfolioValueState = true;
  }

  return (
    inputValues.every(value => value !== "") &&
    careerValueState &&
    projectValueState &&
    portfolioValueState
  );
};

export default handleCheckRequired;
