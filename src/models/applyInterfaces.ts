interface MenuProps {
  id: number;
  position: string;
  position_title: string;
  career_type: string;
  work_type: string;
  deadline: string;
  description: string;
  num_applicants: number;
  author: string;
}

interface MenuApplyProps {
  id: number;
  position: string;
  position_title: string;
  career_type: string;
  work_type: string;
  deadline: string;
  description: string;
  recruit_application: number;
  idx: number;
}

interface ClickProps {
  isActive: boolean;
}

interface IDProp {
  id: string;
}

interface TokenProps {
  access_token: string;
  is_applied: boolean;
}

export type { MenuProps, ClickProps, IDProp, TokenProps, MenuApplyProps };
