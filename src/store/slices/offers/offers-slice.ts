import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CITIES, CitiesName} from '@constants';
import {OFFERS} from '@mocks/offers.ts';
import {OffersStateT} from '@slices/offers/types.ts';
import {OFFERS_SLICE_NAME} from '@slices/slice-name.ts';
import {fetchOffersAction} from '@slices/offers/offers-thunk.ts';
import {OfferPreview} from '@customType/offer.ts';

const initialState: OffersStateT = {
  currentCity: CITIES[0].name,
  offers: OFFERS,
};

export const offersSlice = createSlice({
  initialState,
  name: OFFERS_SLICE_NAME,
  reducers: {
    changeCity: (state, action: PayloadAction<CitiesName>) => {
      state.currentCity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAction.pending, (state, action: PayloadAction<OfferPreview[]>) => {
        state.offers = action.payload;
      })
  },
  selectors: {
    offers: (state: OffersStateT) => state.offers,
    city: (state: OffersStateT) => state.currentCity,
  },
});
