import { action, observable } from "mobx";
import { NotificationUpload } from "../models/AdminNotificationInterface";

const SelectedDropdown: NotificationUpload = observable({
  career_type: "",
  work_type: "",
  deadline: "",
  position: "",
  setCareer_type: action(() => {
    SelectedDropdown.career_type = "good";
  }),
});

export default SelectedDropdown;
