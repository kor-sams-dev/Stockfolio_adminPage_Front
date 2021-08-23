import { action, observable } from "mobx";
import {
  IApplicationForm,
  IEducationAttrs,
} from "../models/ApplicationInterfaces";

const ApplicationStore: IApplicationForm = observable({
  basicInfo: {
    userName: "",
    email: "",
    phoneNumber: "",
  },
  career: {
    companyName: "",
    rank: "",
    joinDate: "",
    leavingDate: "",
    businessTask: "",
  },
  project: {
    projectName: "",
    association: "",
    startDate: "",
    endDate: "",
    mainStack: "",
    projectInfo: "",
  },
  introduction: {
    aboutMe: "",
  },
  portfolio: {
    portfolioFile: "",
    portfolioUrl: "",
  },
  education: {
    background: "",
    schoolName: "",
    major: "",
    grade: "",
    enrollDate: "",
    graduateDate: "",
    graduateState: "",
  },
});

const ApplicationActions = observable({
  setInput: action(
    <T extends keyof IApplicationForm>(
      sort: T,
      name: keyof IApplicationForm[T],
      value: IApplicationForm[T][keyof IApplicationForm[T]]
    ) => {
      ApplicationStore[sort][name] = value;
    }
  ),
  setPortfolioFile: action((e: React.ChangeEvent<HTMLInputElement>) => {
    // if (e.target.files?.length) {
    //   ApplicationStore.portfolio.portfolioFile = e.target.files[0] as File;
    // }
  }),
  setSelectValue: action((name: keyof IEducationAttrs, option: string) => {
    ApplicationStore.education[name] = option;
  }),
});

export { ApplicationStore, ApplicationActions };
