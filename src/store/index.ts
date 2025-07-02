import {configureStore} from '@reduxjs/toolkit';
import offersSlice from './slices/offers';

export const store = configureStore({
  reducer: {[offersSlice.name]: offersSlice.reducer}
});

console.log(store.getState());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {offersSlice};
