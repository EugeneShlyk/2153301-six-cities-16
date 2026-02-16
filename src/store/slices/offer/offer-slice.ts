import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OFFER_SLICE_NAME} from '@slices/slice-name.ts';
import {IOfferState} from '@slices/offer/types.ts';
import {fetchOfferAction} from '@slices/offer/offer-thunk.ts';
import {Offer} from '@customType/offer.ts';

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferAction.fulfilled,
        (state, action: PayloadAction<Offer>) => {
          state.info = action.payload;
        });
  },
  selectors: {
    nearbyOffers: (state: IOfferState) => state.nearby,
    offer: (state: IOfferState) => state.info,
  }
});
