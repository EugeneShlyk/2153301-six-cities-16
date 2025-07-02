import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CITIES, CitiesName} from '@constants';
import {OFFERS} from '@mocks/offers.ts';
import {OfferPreview} from '@customType/offer.ts';

export type OffersStateT = {
  currentCity: CitiesName;
  offers: OfferPreview[];
}

const initialState: OffersStateT = {
  currentCity: CITIES[0].name,
  offers: OFFERS,
};

export const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    changeCity: (state, action: PayloadAction<CitiesName>) => {
      state.currentCity = action.payload;
    },
  },
  selectors: {
    offers: (state: OffersStateT) => state.offers,
    city: (state: OffersStateT) => state.currentCity,
  },
});
