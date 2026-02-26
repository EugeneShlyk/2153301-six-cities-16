import {createAppAsyncThunk} from '@store/hooks/create-app-async-thunk.ts';
import {User} from '@customType/user.ts';
import {LoginData} from '@slices/user/types.ts';
import {USER_SLICE_NAME} from '@slices/slice-name.ts';
import {ENDPOINTS} from '@constants';
import {deleteToken, setToken} from '@shared/token.ts';

export const login = createAppAsyncThunk<User, LoginData>(
  `${USER_SLICE_NAME}/login`,
  async (loginData, {extra: api}) => {
    const response = await api.post<User>(`${ENDPOINTS.LOGIN}`, loginData);
    setToken(response.data.token);
    return response.data;
  }
);

export const logout = createAppAsyncThunk<unknown, undefined>(
  `${USER_SLICE_NAME}/logout`,
  async (_arg, {extra: api}) => {
    await api.delete(ENDPOINTS.LOGOUT);
    deleteToken();
  }
);

export const checkAuth = createAppAsyncThunk<User, undefined>(
  `${USER_SLICE_NAME}/checkAuth`,
  async (_arg, {extra: api}) => {
    const response = await api.get<User>(ENDPOINTS.LOGIN);
    return response.data;
  }
);
