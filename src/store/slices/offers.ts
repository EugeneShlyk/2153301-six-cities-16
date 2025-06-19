import {CITIES, CityName} from '@constants';
import {createSlice} from '@reduxjs/toolkit';


const initialState: OffersState = {
  currentCity: CITIES[0].name,
  offersByCurrentCity: OFFERS,
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
