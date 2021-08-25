export interface IBasicInfoAttrs {
  userName: string;
  email: string;
  phoneNumber: string;
}

export interface ICareerAttrs {
  companyName: string;
  rank: string;
  joinDate: string;
  leavingDate: string;
  businessTask: string;
}

export interface IProjectAttrs {
  projectName: string;
  association: string;
  startDate: string;
  endDate: string;
  mainStack: string;
  projectInfo: string;
}

export interface IIntroductionAttrs {
  aboutMe: string;
}

export interface IPortfolioAttrs {
  portfolioUrl: string;
}

export interface IEducationAttrs {
  background: string;
  schoolName: string;
  major: string;
  grade: string;
  enrollDate: string;
  graduateDate: string;
  graduateState: string;
}

export interface IFileAttrs {
  portfolio: File | undefined;
}

export interface IApplicationForm {
  basicInfo: IBasicInfoAttrs;
  introduction: IIntroductionAttrs;
  portfolio: IPortfolioAttrs;
  education: IEducationAttrs;
  file: IFileAttrs;
}

export interface IApplicationListForm {
  career: ICareerAttrs[];
  project: IProjectAttrs[];
}

export interface IItemProps {
  name: string;
  type: string;
  placeholder: string;
  title: string;
  options?: string[];
  itemWidth: number;
}

export const applicationDefaultForm: IApplicationForm = {
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
};

export const applicationListDefaultFormat = {
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

export const applicationListDefaultForm: IApplicationListForm = {
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
};
