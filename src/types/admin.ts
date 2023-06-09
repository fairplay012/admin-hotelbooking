// PROJECT IMPORTS

export interface AdminState {
  admin: Admin[];
  pageCount?: number;
  currentPage: number;
  error?: any;
}
export interface Payload {
  id?: string | number;
  params?: Admin;
  callback?: (response: any) => void;
}

export type AdminFilter = {
  search?: string;
  isTrust?: number | string;
  isMint?: number | string;
  isLogin?: number | string;
  currentPage: number;
  limit?: number;
};

export type Admin = {
  _id?: string;
  username?: string;
  email?: string;
  password?: string;
  createdAt?: string;
  updatedAt?: string;
  bio?: string;
  __v?: number;
  isAdmin?: boolean;
};
export type SelectProps = {
  value?: any;
  label: string;
};
