import {OfferPreview} from '@customType/offer.ts';
import {OFFERS} from '@mocks/offers.ts';
import {createSlice} from '@reduxjs/toolkit';
import {FAVORITES_SLICE_NAME} from '@slices/slice-name.ts';

type FavoritesState = {
  items: OfferPreview[];
}

const initialState: FavoritesState = {
  items: OFFERS.filter((offer) => offer.isFavorite)
};

export const favoritesSlice = createSlice({
  name: FAVORITES_SLICE_NAME,
  initialState,
  reducers : {},
  selectors: {
    favorites: (state: FavoritesState) => state.items,
  }
});
