import { action, observable } from "mobx";
import applicationForm from "../assets/data/applicationForm";

const [basicInfo, career, project, introduction, portfolio, education] =
  applicationForm;

const ApplicationFormStore = observable({
  basicInfo: basicInfo.data.item,
  career: career.data.item,
  project: project.data.item,
  introduction: introduction.data.item,
  portfolio: portfolio.data.item,
  education: education.data.item,
  // setUnits: action((sort: string) => {
  //   ApplicationFormStore[sort] = [
  //     ...ApplicationFormStore[sort],
  //     ...ApplicationFormStore[sort],
  //   ];
  // }),
});

export default ApplicationFormStore;
