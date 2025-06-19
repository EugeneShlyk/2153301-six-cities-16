import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {OffersState} from './offers/types.ts';
import {CITIES, CityName} from '@constants';


const initialState: OffersState = {
  currentCity: CITIES[0].name,
  offers: OFFERS,
};

const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    changeCity: (state, action: PayloadAction<CityName>) => {
      state.currentCity = action.payload;
    },
  },
  selectors: {
    offers: (state) => state.offersByCurrentCity,
    city: state => state.currentCity,
  },
});
