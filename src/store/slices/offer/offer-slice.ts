import {createSlice} from '@reduxjs/toolkit';
import {OFFER_SLICE_NAME} from '@slices/slice-name.ts';
import {IOfferState} from '@slices/offer/types.ts';

const initialState: IOfferState = {
  info: null,
  nearby: [],
};

export const offerSlice = createSlice({
  name: OFFER_SLICE_NAME,
  initialState,
  reducers: {
    clear: (state: IOfferState) => {
      state.info = null;
      state.nearby = [];
    },
  },
  selectors: {
    nearbyOffers: (state: IOfferState) => state.nearby,
    offer: (state: IOfferState) => state.info,
  }
});
