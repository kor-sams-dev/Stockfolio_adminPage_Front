export interface IAccountItem {
  id: number;
  title: string;
  name: string;
  placeholder?: string;
  itemWidth?: number;
  email?: string;
  password?: string;
}

export interface INotificationItem {
  id: number;
  title: string;
  name?: string;
  itemWidth: number;
  list: Array<string>;
}

export interface IApplicantBasicInfo {
  userName?: string;
  email?: string;
  phoneNumber?: string;
  careerType?: string;
  supportNoti?: string;
  supportData?: string;
}

export interface IApplicantCareer {
  companyName?: string;
  rank?: string;
  joinDate?: string;
  leavingDate?: string;
  businessTask?: string;
}

export interface IApplicantProject {
  projectName?: string;
  endDate?: string;
  startDate?: string;
  association?: string;
  mainStack?: string;
  projectInfo?: string;
}

export interface IApplicantIntroduce {
  aboutMe: string;
}

export interface IApplicantEducation {
  background: string;
  schoolName: string;
  major: string;
  grade: string;
  graduateState: string;
  enrollDate: string;
  graduateDate: string;
}

export interface IApplicantPortfolio {
  addFile: string;
  portfolioUrl: string;
}

export interface IUserInfo {
  id: number;
  userName: string;
  email: string;
  password: string;
}
