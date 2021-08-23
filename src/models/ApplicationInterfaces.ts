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
  // portfolioFile: File | undefined;
  portfolioFile: string;
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

export interface IApplicationForm {
  basicInfo: IBasicInfoAttrs;
  career: ICareerAttrs;
  project: IProjectAttrs;
  introduction: IIntroductionAttrs;
  portfolio: IPortfolioAttrs;
  education: IEducationAttrs;
}

export interface IItemProps {
  name: string;
  type: string;
  placeholder: string;
  title: string;
  options?: string[];
  itemWidth: number;
}
