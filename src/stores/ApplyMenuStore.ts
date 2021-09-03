import { action, observable } from "mobx";
import { MenuProps } from "../models/applyInterfaces";

export const SelectedContent: MenuProps = observable({
  id: 1,
  position: "",
  position_title: "",
  career_type: "",
  work_type: "",
  deadline: "",
  description: "",
});

export const ApplyMenuStore = observable({
  clicked: "전체",
  viewContent: [],
  totalContent: [],
  setClicked: action((value: string) => {
    ApplyMenuStore.clicked = value;
  }),
  setViewContent: action((data: any) => {
    ApplyMenuStore.viewContent = data;
  }),
  setSelectedContent: action((data: MenuProps) => {
    SelectedContent.id = data.id;
    SelectedContent.position = data.position;
    SelectedContent.position_title = data.position_title;
    SelectedContent.career_type = data.career_type;
    SelectedContent.work_type = data.work_type;
    SelectedContent.deadline = data.deadline;
    SelectedContent.description = data.description;
  }),
  setTotalContent: action((data: any) => {
    ApplyMenuStore.totalContent = data;
  }),
});
