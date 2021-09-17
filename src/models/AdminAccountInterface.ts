export interface IAccountItem extends IAccountInfo {
  title: string;
  name: string;
  placeholder?: string;
  itemWidth?: number;
}

export interface INotificationItem {
  id: number;
  title: string;
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

export interface IAccountInfo {
  id: number;
  username?: string;
  email?: string;
  password?: string;
  created_at?: string;
  updated_at?: string;
}
