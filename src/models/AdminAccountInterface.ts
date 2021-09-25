export interface IAccountItem extends IAccountInfo {
  title: string;
  name: string;
  placeholder?: string;
  itemWidth?: number;
}

export interface IAccountInfo {
  id: number;
  username?: string;
  email?: string;
  password?: string;
}

export interface INotificationItem {
  id: number;
  title: string;
  itemWidth: number;
  list: Array<string>;
}

export interface IApplicantData {
  id?: number;
  content?: IDataForm;
  status?: string;
  created_at?: string;
  updated_at?: string;
  user_id?: number;
  user_email?: string;
  recruit_id: number;
  job_openings?: Array<string>;
  author?: Array<string>;
  work_type?: Array<string>;
  career_type?: string;
  position_title?: Array<string>;
  position?: Array<string>;
  deadline?: Array<string>;
}

export interface IDataForm {
  file: any;
  career: IApplicantCareer[];
  project: IApplicantProject[];
  basicInfo: IApplicantBasicInfo;
  education: IApplicantEducation;
  portfolio: IApplicantPortfolio;
  introduction: IApplicantIntroduce;
}

export interface IApplicantBasicInfo {
  userName?: string;
  email?: string;
  phoneNumber?: string;
  career_type?: string;
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
  portfolioUrl: string;
}

export const applicantForm: IApplicantData = {
  id: 0,
  content: {
    file: {},
    career: [
      {
        rank: "",
        joinDate: "",
        companyName: "",
        leavingDate: "",
        businessTask: "",
      },
    ],
    project: [
      {
        endDate: "",
        mainStack: "",
        startDate: "",
        association: "",
        projectInfo: "",
        projectName: "",
      },
    ],
    basicInfo: {
      email: "",
      userName: "",
      phoneNumber: "",
    },
    education: {
      grade: "",
      major: "",
      background: "",
      enrollDate: "",
      schoolName: "",
      graduateDate: "",
      graduateState: "",
    },
    portfolio: {
      portfolioUrl: "",
    },
    introduction: {
      aboutMe: "",
    },
  },
  status: "",
  created_at: "",
  updated_at: "",
  user_id: 0,
  user_email: "",
  recruit_id: 0,
  job_openings: [""],
  author: [""],
  work_type: [""],
  career_type: "",
  position_title: [""],
  position: [""],
  deadline: [""],
};

export interface IApplicantComment {
  comments: Array<IApplicantListData>;
}

export const commentForm: IApplicantComment = {
  comments: [],
};

export interface IApplicantListData {
  admin_id?: number;
  admin_name?: string;
  created_at?: string;
  updated_at?: string;
  description: string;
  score: number;
  id?: number;
}

export const commentListForm: IApplicantListData = {
  admin_id: 0,
  admin_name: "",
  created_at: "",
  updated_at: "",
  description: "",
  score: 0,
  id: 0,
};
