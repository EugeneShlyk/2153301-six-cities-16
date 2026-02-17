import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OFFER_SLICE_NAME} from '@slices/slice-name.ts';
import {IOfferState} from '@slices/offer/types.ts';
import {fetchOfferAction} from '@slices/offer/offer-thunk.ts';
import {Offer} from '@customType/offer.ts';
import {isActionPending, isActionRejected} from '@utils/redux.ts';
import {RequestStatus} from '@constants';

const initialState: IOfferState = {
  info: null,
  nearby: [],
  requestStatus: RequestStatus.Idle,
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
          state.requestStatus = RequestStatus.Success;
          state.info = action.payload;
        })
      .addMatcher(isActionPending(OFFER_SLICE_NAME),
        (state) => {
          state.requestStatus = RequestStatus.Success;
        })
      .addMatcher(isActionRejected(OFFER_SLICE_NAME),
        (state) => {
          state.requestStatus = RequestStatus.Failed;
        });
  },
  selectors: {
    nearbyOffers: (state: IOfferState) => state.nearby,
    offer: (state: IOfferState) => state.info,
    offerStatus: (state: IOfferState) => state.requestStatus,
  }
});
