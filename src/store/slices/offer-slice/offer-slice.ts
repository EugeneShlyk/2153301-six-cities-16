import {Offer, OfferPreview} from '@customType/offer.ts';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {OFFER_SLICE_NAME} from '@slices/slice-name.ts';
import {OffersStateT} from '@slices/offers/types.ts';

type OfferState = {
  info: Offer | null;
  nearby: OfferPreview[];
}

const initialState: OfferState = {
  info: null,
  nearby: [],
};

export const offerSlice = createSlice({
  name: OFFER_SLICE_NAME,
  initialState,
  reducers: {
    clear: (state: OfferState) => {
      state.info = null;
      state.nearby = [];
    },
  },
  selectors: {
    nearbyOffers: (state: OffersStateT) => state.nearby,
    offer: (state: OffersStateT) => state.info,
  }
});
