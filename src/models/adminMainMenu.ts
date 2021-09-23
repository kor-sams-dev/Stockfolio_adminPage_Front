export interface AdminMenu {
  Id: number;
  context: number;
  number: number;
  label: number;
}
export interface AdminApplicant {
  idx: number;
  label: string;
  developer: string;
  career: string;
  date: string;
  number: number;
}

export interface AdminToday {
  today_applicant: number;
  progress_recruit: number;
  new_recruit: number;
  deadline_recruit: number;
}

export interface AdminRecentApplicant {
  created_at: string;
  new: boolean;
  position_title: string;
  content: Content;
  deadline: string;

  recruit_id: number[];
}

export interface BasicInfotype {
  email: string;
  userName: string;
  phoneNumber: string;
}

export interface Content {
  basicInfo: BasicInfotype;
}
