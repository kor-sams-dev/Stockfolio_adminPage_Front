import { action, observable } from "mobx";

const ApplicationStore = observable({
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
  setInput: action((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // ApplicationStore[sort][name] = value;
  }),
  setPortfolioFile: action((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      ApplicationStore.portfolio.portfolioFile = e.target.files[0].name;
    }
  }),
});

export default ApplicationStore;
