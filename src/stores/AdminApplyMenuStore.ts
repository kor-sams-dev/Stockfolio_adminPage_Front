import { action, observable } from "mobx";
import { MenuApplyProps } from "../models/applyInterfaces";

export const SelectedApplyContent: MenuApplyProps = observable({
  id: 1,
  position: "",
  position_title: "",
  career_type: "",
  work_type: "",
  deadline: "",
  description: "",
  applicants_num: 1,
  idx: 1,
});

export const AdminApplyMenuStore = observable({
  adminclicked: "전체",
  adminviewContent: [],
  admintotalContent: [],
  setClickedAdmin: action((value: string) => {
    AdminApplyMenuStore.adminclicked = value;
  }),
  setViewContentAdmin: action((data: any) => {
    AdminApplyMenuStore.adminviewContent = data;
  }),
  setSelectedContentAdmin: action((data: MenuApplyProps) => {
    SelectedApplyContent.id = data.id;
    SelectedApplyContent.position = data.position;
    SelectedApplyContent.position_title = data.position_title;
    SelectedApplyContent.career_type = data.career_type;
    SelectedApplyContent.work_type = data.work_type;
    SelectedApplyContent.deadline = data.deadline;
    SelectedApplyContent.description = data.description;
  }),
  setTotalContentAdmin: action((data: any) => {
    AdminApplyMenuStore.admintotalContent = data;
  }),
});
