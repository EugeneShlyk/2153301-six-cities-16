import {configureStore} from '@reduxjs/toolkit';
import offersSlice from './slices/offers';
import {rootReducer} from '@store/root-reducers.ts';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument:
    }
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {offersSlice};
