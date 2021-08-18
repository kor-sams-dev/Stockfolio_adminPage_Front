interface FormCategoryProps {
  category: ApplicationProps;
}

interface ApplicationProps {
  sort: string;
  data: ApplicationDataProps;
}

interface ApplicationDataProps {
  isRequired: boolean;
  isListed: boolean;
  hasCheckBox: boolean;
  title: string;
  desc: string;
  item: DataItemProps[];
}

interface DataItemProps {
  onChange?: () => void;
  sort?: string;
  name: string;
  type?: string;
  placeholder: string;
  title: string;
  options?: string[];
  itemWidth: number;
}

interface InputWidthProps {
  itemWidth: number;
}

interface IApplicationForm {
  basicInfo: IBasicInfoAttrs;
  career: ICareerAttrs;
  project: IProjectAttrs;
  introduction: IIntroductionAttrs;
  portfolio: IPortfolioAttrs;
  education: IEducationAttrs;
}

interface IBasicInfoAttrs {
  userName: string | null;
  email: string | null;
  phoneNumber: string | null;
}

interface ICareerAttrs {
  companyName: string | null;
  rank: string | null;
  joinDate: string | null;
  leavingDate: string | null;
  businessTask: string | null;
}

interface IProjectAttrs {
  projectName: string | null;
  association: string | null;
  startDate: string | null;
  endDate: string | null;
  mainStack: string | null;
  projectInfo: string | null;
}

interface IIntroductionAttrs {
  aboutMe: string | null;
}

interface IPortfolioAttrs {
  portfolioFile: string | null;
  portfolioUrl: string | null;
}

interface IEducationAttrs {
  background: string | null;
  schoolName: string | null;
  major: string | null;
  grade: string | null;
  enrollDate: string | null;
  graduateDate: string | null;
  graduateState: string | null;
}

interface IIndexable {
  [key: string]: unknown;
}

export type {
  FormCategoryProps,
  ApplicationProps,
  DataItemProps,
  InputWidthProps,
  IApplicationForm,
  IIndexable,
};
