export interface IAccountItem {
  id: number;
  title: string;
  name: string;
  placeholder?: string;
  itemWidth?: number;
  email?: string;
  password?: string;
}

export interface INotificationItem {
  id: number;
  title: string;
  itemWidth: number;
}

export interface IUserInfo {
  id: string;
  name: string;
  email: string;
  password: string;
}
