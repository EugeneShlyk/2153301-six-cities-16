import {createSlice} from '@reduxjs/toolkit';
import {FAVORITES_SLICE_NAME} from '@slices/slice-name.ts';
import {FavoritesState, FavoritesStatus} from '@slices/favorites/types.ts';
import {RequestStatus} from '@constants';
import {changeFavorites, fetchFavorites} from '@slices/favorites/favorites-thunk.ts';
import {isActionPending, isActionRejected} from '@utils/redux.ts';

const initialState: FavoritesState = {
  items: [],
  status: RequestStatus.Idle,
  length: 0,
};

export const favoritesSlice = createSlice({
  name: FAVORITES_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(changeFavorites.fulfilled, (state, action) => {
        switch (action.payload.statusFavorite) {
          case FavoritesStatus.Added:
            state.items.push(action.payload.adaptedOfferPreview);
            break;
          case FavoritesStatus.Removed:
            state.items = state.items.filter(({id}) => id !== action.payload.adaptedOfferPreview.id);
            break;
        }
      })
      .addMatcher(isActionPending(FAVORITES_SLICE_NAME),
        (state) => {
          state.status = RequestStatus.Loading;
        })
      .addMatcher(isActionRejected(FAVORITES_SLICE_NAME),
        (state) => {
          state.status = RequestStatus.Failed;
        });
  },
  selectors: {
    favorites: (state: FavoritesState) => state.items,
    favoritesStatus: (state: FavoritesState) => state.status,
    favoritesLength: (state: FavoritesState) => state.items.length,
  }
});
