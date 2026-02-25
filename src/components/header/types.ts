import {User} from '@customType/user.ts';
import {AuthorizationStatus, RequestStatus} from '@constants';

export type UserState = {
  info: User | null;
  statusAuthorization: AuthorizationStatus;
  status: RequestStatus;
}
