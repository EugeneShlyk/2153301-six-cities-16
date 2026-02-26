import {userSlice} from '@slices/user/user-slice.ts';
import {login, logout, checkAuth} from '@slices/user/user-thunk.ts';

export const userAction = {...userSlice.actions, login, logout, checkAuth};
export const userSelector = userSlice.selectors;

export default userSlice;
