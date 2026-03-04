import {OFFERS} from '@mocks/offers.ts';
import {createSlice} from '@reduxjs/toolkit';
import {FAVORITES_SLICE_NAME} from '@slices/slice-name.ts';
import {FavoritesState, FavoritesStatus} from '@slices/favorites/types.ts';
import {RequestStatus} from '@constants';
import {changeFavorites, fetchFavorites} from '@slices/favorites/favorites-thunk.ts';

const initialState: FavoritesState = {
  items: OFFERS.filter((offer) => offer.isFavorite),
  status: RequestStatus.Idle,
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
        switch (action.payload.status) {
          case FavoritesStatus.Added:
            const {description, bedrooms, goods, host, images, maxAdults, ...previewData} = action.payload.offer;
        }
      });
  },
  selectors: {
    favorites: (state: FavoritesState) => state.items,
  }
});
