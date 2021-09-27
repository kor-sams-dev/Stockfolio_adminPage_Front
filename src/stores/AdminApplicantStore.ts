import { action, observable } from "mobx";

const AdminApplicantStore = observable({
  ApplicantList: [],
  setApplicant: action((data: any) => {
    AdminApplicantStore.ApplicantList = data;
  }),
});

export default AdminApplicantStore;
