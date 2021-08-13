interface FormCategoryProps {
  category: ApplicationProps;
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

export type { FormCategoryProps, DataItemProps, InputWidthProps };
