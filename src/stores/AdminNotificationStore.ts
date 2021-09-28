import { action, observable } from "mobx";
import { INotificationUpload } from "../models/AdminNotificationInterface";

export const selectNotificationData: INotificationUpload = observable({
  career_type: "",
  work_type: "",
  deadline: "",
  position: "",
  position_title: "",
  description: "",
});

export const DropdownStore = observable({
  setDropdown: action((name: keyof INotificationUpload, data: string) => {
    selectNotificationData[name] = data;
    selectNotificationData.deadline = "2021-10-10";
    console.log(selectNotificationData);
  }),
  setTitle: action((data: string) => {
    selectNotificationData.position_title = data;
  }),
  setDescription: action((data: string) => {
    selectNotificationData.description = data;
  }),
});
