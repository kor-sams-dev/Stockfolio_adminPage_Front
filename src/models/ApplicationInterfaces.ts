interface FormCategoryProps {
  category: ApplicationProps;
}

interface IFormCategory {
  category:
    | "basicInfo"
    | "career"
    | "project"
    | "introduction"
    | "portfolio"
    | "education";
}

interface ApplicationProps {
  sort: string;
  data: ApplicationDataProps;
}

interface ApplicationDataProps {
  isRequired: boolean;
  isListed: boolean;
  hasCheckBox: boolean;
  title: string;
  desc: string;
  item: DataItemProps[];
}

interface DataItemProps {
  onChange?: () => void;
  sort?: string;
  name: string;
  type?: string;
  placeholder: string;
  title: string;
  options?: string[];
  itemWidth: number;
}

interface InputWidthProps {
  itemWidth: number;
}

interface ISort {
  basicInfo: string;
  career: string;
  project: string;
  introduction: string;
  portfolio: string;
  education: string;
}

export type {
  IFormCategory,
  FormCategoryProps,
  DataItemProps,
  InputWidthProps,
  ISort,
};
