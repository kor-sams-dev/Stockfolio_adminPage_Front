import { action, observable } from "mobx";
import {
  IApplicationForm,
  IApplicationListForm,
  ICareerAttrs,
  IEducationAttrs,
  IProjectAttrs,
} from "../models/ApplicationInterfaces";

const ApplicationStore: IApplicationForm = observable({
  basicInfo: {
    userName: "",
    email: "",
    phoneNumber: "",
  },
  introduction: {
    aboutMe: "",
  },
  portfolio: {
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

const listDefaultFormat = {
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
};

const ApplicationListStore: IApplicationListForm = observable({
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
      ApplicationStore.file.portfolio = e.target.files[0] as File;
    }
  }),
  setSelectValue: action((name: keyof IEducationAttrs, option: string) => {
    ApplicationStore.education[name] = option;
  }),
  setCareerListInput: action(
    (chunkIdx: number, name: keyof ICareerAttrs, value: string) => {
      ApplicationListStore.career[chunkIdx][name] = value;
    }
  ),
  setProjectListInput: action(
    (chunkIdx: number, name: keyof IProjectAttrs, value: string) => {
      ApplicationListStore.project[chunkIdx][name] = value;
    }
  ),
  setAddList: action((sort: keyof IApplicationListForm) => {
    if (sort === "career") {
      ApplicationListStore.career = ApplicationListStore.career.concat(
        listDefaultFormat.career
      );
    } else if (sort === "project") {
      ApplicationListStore.project = ApplicationListStore.project.concat(
        listDefaultFormat.project
      );
    }
  }),
});

export { ApplicationActions, ApplicationStore, ApplicationListStore };
