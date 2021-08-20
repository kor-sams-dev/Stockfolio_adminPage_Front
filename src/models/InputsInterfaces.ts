export interface ISelectList {
  isListOn: ISelectListItem;
}

export interface ISelectListItem {
  background: boolean;
  graduateState: boolean;
}

export interface ICheckbox {
  isChecked: ICheckboxItem;
}

export interface ICheckboxItem {
  career: boolean;
  project: boolean;
}
