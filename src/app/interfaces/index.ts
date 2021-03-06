export interface ICategory {
  _id: string;
  name: string;
  color: string;
  isSelected?: boolean;
}

export interface IEvent {
  _id?: string;
  client: string;
  addressEvent: string;
  phone: string;
  pic: IEmployee;
  category: ICategory;
  committees?: IEmployee[];
  vendors?: IVendor[];
  isFinished?: boolean;
  assignments?: IAssignment[];
  createdAt?: Date;
}

export interface IAdmin {
  _id: string;
  username: string;
}

export interface IDocument {
  path: string;
  deskripsi: string;
}

export interface IAssignment {
  _id?: string;
  assignment: string;
  isFinished: boolean;
  deadline: Date;
  employee: string | IEmployee;
  event: string | IEvent;
}

export interface IEmployee {
  _id?: string;
  username: string;
  name: string;
  address: string;
  phone: string;
  position: number;
  password?: string;
  assignments?: IAssignment[];
}

export interface IVendor {
  _id?: string;
  name: string;
  phone: string;
}

export interface IUser {
  username: string;
  password: string;
}

export interface IToken {
  success?: boolean;
  token: string;
}

// type:
// 1 = acara,
// 2 = penugasan
export interface INotification {
  isRead: boolean;
  type: number;
  idReference: string;
  user: string;
  message: string;
  createdAt: Date;
}
