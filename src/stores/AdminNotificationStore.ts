import { action, observable } from "mobx";
import { INotificationUpload } from "../models/AdminNotificationInterface";
import AdminDefaultNotiForm from "../assets/data/adminDefaultNotiForm";

export const selectNotificationData: INotificationUpload = observable({
  position_title: "",
  career_type: "경력",
  work_type: "형태",
  deadline: "마감일",
  position: "직종",
  description: `${AdminDefaultNotiForm.basicForm}`,
});

export const DropdownStore = observable({
  setDropdown: action((name: keyof INotificationUpload, data: string) => {
    selectNotificationData[name] = data;
    selectNotificationData.deadline = "2021-10-10";
  }),
  setTitle: action((data: string) => {
    selectNotificationData.position_title = data;
  }),
  setDescription: action((data: string) => {
    selectNotificationData.description = data;
  }),
});
