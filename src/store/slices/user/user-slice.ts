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
    userStatus: sliceState => (state) => state.status,
    user: sliceState => (state) => state.info,
  }
});
