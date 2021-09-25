import { action, observable } from "mobx";
import { AdminToday } from "../models/adminMainMenu";

const AdminMenuboxStore = observable({
  today_applicant: 1,
  progress_recruit: 1,
  new_recruit: 1,
  deadline_recruit: 1,
  setMenu: action((data: AdminToday) => {
    AdminMenuboxStore.today_applicant = data.today_applicant;
    AdminMenuboxStore.progress_recruit = data.progress_recruit;
    AdminMenuboxStore.new_recruit = data.new_recruit;
    AdminMenuboxStore.deadline_recruit = data.deadline_recruit;
  }),
});

export default AdminMenuboxStore;
