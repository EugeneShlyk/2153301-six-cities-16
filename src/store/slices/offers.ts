import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {OffersState} from './offers/types.ts';
import {CITIES, CitiesName} from '@constants';
import {OFFERS} from '@mocks/offers.ts';

const initialState: OffersState = {
  currentCity: CITIES[0].name,
  offers: OFFERS,
};

const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    changeCity: (state, action: PayloadAction<CitiesName>) => {
      state.currentCity = action.payload;
    },
  },
  selectors: {
    offers: (state: OffersState) => state.offers,
    city: (state: OffersState) => state.currentCity,
  },
});

const offersActions = offersSlice.actions;
const offersSelectors = offersSlice.selectors;

export {offersSlice, offersActions, offersSelectors};
