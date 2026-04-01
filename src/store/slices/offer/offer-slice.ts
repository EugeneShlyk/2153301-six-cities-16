import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OFFER_SLICE_NAME} from '@slices/slice-name.ts';
import {IOfferState} from '@slices/offer/types.ts';
import {fetchNearbyOffers, fetchOffer} from '@slices/offer/offer-thunk.ts';
import {Offer} from '@customType/offer.ts';
import {isActionPending, isActionRejected} from '@utils/redux.ts';
import {RequestStatus} from '@constants';
import {changeFavorites} from '@slices/favorites/favorites-thunk.ts';

const initialState: IOfferState = {
  info: null,
  nearby: [],
  requestStatus: RequestStatus.Idle,
};

export const offerSlice = createSlice({
  name: OFFER_SLICE_NAME,
  initialState,
  reducers: {
    clearOffer: (state: IOfferState) => {
      state.info = null;
      state.nearby = [];
      state.requestStatus = RequestStatus.Idle;
    },
    updateOffer: (state: IOfferState, action: PayloadAction<string>) => {
      state.info =
        state.info?.id === action.payload
          ? {...state.info, isFavorite: !state.info?.isFavorite}
          : state.info;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffer.fulfilled,
        (state, action: PayloadAction<Offer>) => {
          state.requestStatus = RequestStatus.Success;
          state.info = action.payload;
        })
      .addCase(fetchNearbyOffers.fulfilled,
        (state, action) => {
          state.requestStatus = RequestStatus.Success;
          state.nearby = action.payload;
        })
      .addCase(changeFavorites.pending, (state, action) => {
        const {status} = action.meta.arg;
        if (state.info) {
          state.info.isFavorite = !!status;
        }
      })
      .addCase(changeFavorites.fulfilled, (state, action) => {
        state.info = action.payload.adaptedOffer;
      })
      .addCase(changeFavorites.rejected, (state, action) => {
        const {status} = action.meta.arg;
        if (state.info) {
          state.info.isFavorite = !status;
        }
      })
      .addMatcher(isActionPending(OFFER_SLICE_NAME),
        (state) => {
          state.requestStatus = RequestStatus.Loading;
          state.info = null;
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
