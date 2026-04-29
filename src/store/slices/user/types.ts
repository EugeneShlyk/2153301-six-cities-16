import {User} from '@customType/user.ts';
import {AuthorizationStatus, RequestStatus} from '@constants';

export type LoginData = {
  email: string;
  password: string;
}

export type UserState = {
  info: User | null;
  authStatus: AuthorizationStatus;
  status: RequestStatus;
}
