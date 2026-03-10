import {AuthorizationStatus, RequestStatus} from '@constants';
import {createSlice} from '@reduxjs/toolkit';
import {USER_SLICE_NAME} from '@slices/slice-name.ts';
import {checkAuth, login, logout} from '@slices/user/user-thunk.ts';
import {isActionPending, isActionRejected} from '@utils/redux.ts';
import {UserState} from '@slices/user/types.ts';

const initialState: UserState = {
  info: null,
  statusAuthorization: AuthorizationStatus.Unknown,
  status: RequestStatus.Idle,
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
        state.status = RequestStatus.Success;
      })
      .addCase(logout.fulfilled, (state) => {
        state.info = null;
        state.statusAuthorization = AuthorizationStatus.NoAuth;
        state.status = RequestStatus.Idle;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.info = action.payload;
        state.statusAuthorization = AuthorizationStatus.Auth;
        state.status = RequestStatus.Success;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.info = null;
        state.statusAuthorization = AuthorizationStatus.NoAuth; // Теперь спиннер исчезнет
        state.status = RequestStatus.Failed;
      })
      .addMatcher(isActionPending(USER_SLICE_NAME),
        (state) => {
          state.status = RequestStatus.Loading;
        })
      .addMatcher(isActionRejected(USER_SLICE_NAME),
        (state) => {
          state.status = RequestStatus.Failed;
        });
  },
  selectors: {
    userAuthStatus: (state: UserState) => state.statusAuthorization,
    user: (state: UserState) => state.info,
    userResponseStatus: (state: UserState) => state.status,
  }
});
