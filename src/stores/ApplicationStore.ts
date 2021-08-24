import { action, observable } from "mobx";
import {
  IApplicationForm,
  ICareerAttrs,
  IEducationAttrs,
} from "../models/ApplicationInterfaces";

const ResumeStore = observable({
  basicInfo: {
    userName: "",
    email: "",
    phoneNumber: "",
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
  file: {
    portfolio: undefined,
  },
});

const ResumeListStore = observable({
  career: [
    {
      companyName: "",
      rank: "",
      joinDate: "",
      leavingDate: "",
      businessTask: "",
    },
  ],
  project: [
    {
      projectName: "",
      association: "",
      startDate: "",
      endDate: "",
      mainStack: "",
      projectInfo: "",
    },
  ],
});

const ApplicationStore: IApplicationForm = observable({
  basicInfo: {
    userName: "",
    email: "",
    phoneNumber: "",
  },
  career: [
    {
      companyName: "",
      rank: "",
      joinDate: "",
      leavingDate: "",
      businessTask: "",
    },
  ],
  // career: {
  //   companyName: "",
  //   rank: "",
  //   joinDate: "",
  //   leavingDate: "",
  //   businessTask: "",
  // },
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
  file: {
    portfolio: undefined,
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
  setListInput: action(
    (chunkIdx: number, name: keyof ICareerAttrs, value: any) => {
      ApplicationStore.career[chunkIdx][name] = value;
      console.log(ApplicationStore.career[0].companyName);
      console.log(ApplicationStore.career[1].companyName);
    }
  ),
  setPortfolioFile: action((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      ApplicationStore.file.portfolio = e.target.files[0] as File;
    }
  }),
  setSelectValue: action((name: keyof IEducationAttrs, option: string) => {
    ApplicationStore.education[name] = option;
  }),
  setAddCareerList: action(() => {
    ApplicationStore.career = ApplicationStore.career.concat(
      ApplicationStore.career
    );
  }),
});

export { ApplicationStore, ApplicationActions, ResumeStore, ResumeListStore };
