import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from '@store/root-reducers.ts';
import {createAPI} from '@shared/api.ts';

const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    }
  }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
