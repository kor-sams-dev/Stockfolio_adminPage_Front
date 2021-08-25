import {
  IApplicationForm,
  IApplicationListForm,
  IBasicInfoAttrs,
  ICareerAttrs,
  IEducationAttrs,
  IIntroductionAttrs,
  IPortfolioAttrs,
  IProjectAttrs,
} from "../models/ApplicationInterfaces";
import { ApplicationActions } from "../stores/ApplicationStore";

function setValues(content: IApplicationForm & IApplicationListForm): void {
  Object.keys(content).forEach(sort => {
    Object.keys(content[sort]).forEach(name => {
      switch (sort) {
        case "career":
          content.career.forEach((_: unknown, idx: number) => {
            ApplicationActions.setCareerListInput(
              idx,
              name as keyof ICareerAttrs,
              content[sort][name]
            );
          });
          break;
        case "project":
          content.project.forEach((_: unknown, idx: number) => {
            ApplicationActions.setProjectListInput(
              idx,
              name as keyof IProjectAttrs,
              content[sort][name]
            );
          });
          break;
        case "introduction":
          ApplicationActions.setInput(
            "introduction",
            name as keyof IIntroductionAttrs,
            content[sort][name]
          );
          break;
        case "portfolio":
          ApplicationActions.setInput(
            "portfolio",
            name as keyof IPortfolioAttrs,
            content[sort][name]
          );
          break;
        case "education":
          ApplicationActions.setInput(
            "education",
            name as keyof IEducationAttrs,
            content[sort][name]
          );
          break;
        default:
          ApplicationActions.setInput(
            "basicInfo",
            name as keyof IBasicInfoAttrs,
            content[sort][name]
          );
      }
    });
  });
}

export default setValues;

// Object.keys(content).forEach(sort => {
//   Object.keys(content[sort]).forEach((name, idx) => {
//     if (inputKeys.includes(sort)) {
//       ApplicationActions.setInput(
//         sort as keyof IApplicationForm,
//         name,
//         content[sort][name]
//       );
//     } else if (listInputKeys.includes(sort)) {
//       console.log("a");
//     }
//   });
// });
