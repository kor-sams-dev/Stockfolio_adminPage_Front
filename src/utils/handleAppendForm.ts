import {
  ApplicationListStore,
  ApplicationStore,
} from "../stores/ApplicationStore";

function handleAppendForm(): FormData {
  const formData = new FormData();
  if (ApplicationStore.file.portfolio) {
    formData.append("portfolio", ApplicationStore.file.portfolio);
  }
  formData.append(
    "content",
    JSON.stringify({ ...ApplicationStore, ...ApplicationListStore })
  );

  return formData;
}

export default handleAppendForm;
