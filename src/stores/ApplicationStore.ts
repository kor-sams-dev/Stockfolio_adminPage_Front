import { action, observable } from "mobx";
import {
  IApplicationForm,
  IApplicationListForm,
  ICareerAttrs,
  IEducationAttrs,
  IProjectAttrs,
  applicationDefaultForm,
  applicationListDefaultForm,
  applicationListDefaultFormat,
} from "../models/ApplicationInterfaces";

const ApplicationStore = observable({
  ...applicationDefaultForm,
});

const ApplicationListStore = observable({
  ...applicationListDefaultForm,
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
        applicationListDefaultFormat.career
      );
    } else if (sort === "project") {
      ApplicationListStore.project = ApplicationListStore.project.concat(
        applicationListDefaultFormat.project
      );
    }
  }),
});

export { ApplicationActions, ApplicationStore, ApplicationListStore };
