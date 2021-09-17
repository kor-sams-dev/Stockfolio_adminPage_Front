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
