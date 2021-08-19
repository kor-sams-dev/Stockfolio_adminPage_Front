export interface IBasicInfoAttrs {
  userName: string | null;
  email: string | null;
  phoneNumber: string | null;
}

export interface ICareerAttrs {
  companyName: string | null;
  rank: string | null;
  joinDate: string | null;
  leavingDate: string | null;
  businessTask: string | null;
}

export interface IProjectAttrs {
  projectName: string | null;
  association: string | null;
  startDate: string | null;
  endDate: string | null;
  mainStack: string | null;
  projectInfo: string | null;
}

export interface IIntroductionAttrs {
  aboutMe: string | null;
}

export interface IPortfolioAttrs {
  portfolioFile: string | null;
  portfolioUrl: string | null;
}

export interface IEducationAttrs {
  background: string | null;
  schoolName: string | null;
  major: string | null;
  grade: string | null;
  enrollDate: string | null;
  graduateDate: string | null;
  graduateState: string | null;
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
