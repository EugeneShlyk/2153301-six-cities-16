import {combineReducers} from '@reduxjs/toolkit';
import offerSlice from '@slices/offer';
import offersSlice from '@slices/offers';
import favoritesSlice from '@slices/favorites';
import userSlice from '@slices/user';
import reviewsSlice from '@slices/reviews';

export const rootReducer = combineReducers({
  [offerSlice.name]: offerSlice.reducer,
  [offersSlice.name]: offersSlice.reducer,
  [favoritesSlice.name]: favoritesSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [reviewsSlice.name]: reviewsSlice.reducer,
});
