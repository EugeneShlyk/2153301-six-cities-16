import {User} from '@customType/user.ts';
import {AuthorizationStatus, RequestStatus} from '@constants';
import {createSlice} from '@reduxjs/toolkit';
import {USER_SLICE_NAME} from '@slices/slice-name.ts';
import {login} from '@slices/user/user-thunk.ts';
import {isActionPending} from '@utils/redux.ts';


type UserState = {
  info: User | null;
  statusAuthorization: AuthorizationStatus;
}

const initialState: UserState = {
  info: null,
  statusAuthorization: AuthorizationStatus.Unknown,
};

export const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.info = action.payload;
        state.statusAuthorization = AuthorizationStatus.Auth;
      })
      .addMatcher(isActionPending(USER_SLICE_NAME),
        (state) => {

        });
  },
  selectors: {
    userStatus: (state: UserState) => state.statusAuthorization,
    user: (state: UserState) => state.info,
  }
});
