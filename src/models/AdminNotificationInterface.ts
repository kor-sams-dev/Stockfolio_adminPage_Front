export interface INotificationUpload {
  career_type: string;
  work_type: string;
  deadline: string;
  position: string;
  position_title?: string;
  description?: string;
  setDropdown?: any;
}

export interface INotificationData {
  results: Array<INotificationList>;
}

export const notificationDataForm: INotificationData = {
  results: [],
};

export interface INotificationList {
  career_type: string;
  deadline: string;
  id: number;
  job_openings?: string;
  position: string;
  position_title: string;
  applicants_num: number;
  work_type: string;
}
