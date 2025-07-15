import {User} from '@customType/user.ts';
import {AuthorizationStatus} from '@constants';


type UserState = {
  info: User | null;
  status: AuthorizationStatus;
}

const initialState: UserState = {
  info: null,
  status: AuthorizationStatus.Unknown,
}
