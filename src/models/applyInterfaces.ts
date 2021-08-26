interface MenuProps {
  id: number;
  position: string;
  position_title: string;
  career_type: string;
  work_type: string;
  deadline: string;
  description: string;
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

export type { MenuProps, ClickProps, IDProp, TokenProps };
