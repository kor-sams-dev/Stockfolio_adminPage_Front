import { action, observable } from "mobx";
import {
  IApplicationForm,
  IEducationAttrs,
} from "../models/ApplicationInterfaces";

const ApplicationStore: IApplicationForm = observable({
  basicInfo: {
    userName: null,
    email: null,
    phoneNumber: null,
  },
  career: {
    companyName: null,
    rank: null,
    joinDate: null,
    leavingDate: null,
    businessTask: null,
  },
  project: {
    projectName: null,
    association: null,
    startDate: null,
    endDate: null,
    mainStack: null,
    projectInfo: null,
  },
  introduction: {
    aboutMe: null,
  },
  portfolio: {
    portfolioFile: null,
    portfolioUrl: null,
  },
  education: {
    background: null,
    schoolName: null,
    major: null,
    grade: null,
    enrollDate: null,
    graduateDate: null,
    graduateState: null,
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
    if (e.target.files?.length) {
      ApplicationStore.portfolio.portfolioFile = e.target.files[0].name;
    }
  }),
  setSelectValue: action((name: keyof IEducationAttrs, option: string) => {
    ApplicationStore.education[name] = option;
  }),
});

export { ApplicationStore, ApplicationActions };
