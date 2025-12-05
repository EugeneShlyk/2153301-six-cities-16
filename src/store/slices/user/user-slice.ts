import {User} from '@customType/user.ts';
import {AuthorizationStatus} from '@constants';
import {createSlice} from '@reduxjs/toolkit';
import {USER_SLICE_NAME} from '@slices/slice-name.ts';


type UserState = {
  info: User | null;
  status: AuthorizationStatus;
}

const initialState: UserState = {
  info: null,
  status: AuthorizationStatus.Unknown,
};

export const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState,
  reducers: {},
  selectors: {
    userStatus: (state: UserState) => state.status,
    user: (state: UserState) => state.info,
  }
});
