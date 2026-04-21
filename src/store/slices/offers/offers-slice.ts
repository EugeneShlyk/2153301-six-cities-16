import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CITIES, CitiesName, RequestStatus} from '@constants';
import {OffersState} from '@slices/offers/types.ts';
import {OFFERS_SLICE_NAME} from '@slices/slice-name.ts';
import {fetchOffers} from '@slices/offers/offers-thunk.ts';
import {isActionPending, isActionRejected} from '@utils/redux.ts';
import {changeFavorites} from '@slices/favorites/favorites-thunk.ts';
// import offer from '@slices/offer';

const initialState: OffersState = {
  currentCity: CITIES[0].name,
  offers: [],
  requestStatus: RequestStatus.Idle,
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
      .addCase(fetchOffers.fulfilled,
        (state, action) => {
          state.offers = action.payload;
          state.requestStatus = RequestStatus.Success;
        })
      .addCase(changeFavorites.pending, (state, action) => {
        const {status, offerId} = action.meta.arg;
        const indexOffer = state.offers.findIndex((offer) =>
          offer.id === offerId);
        if (indexOffer !== -1) {
          state.offers[indexOffer].isFavorite = !!status;
        }
      })
      .addCase(changeFavorites.fulfilled, (state, action) => {
        const {offerId} = action.meta.arg;
        const index = state.offers.findIndex((offer) =>
          offer.id === offerId);
        if (index !== -1) {
          state.offers[index] = action.payload.adaptedOfferPreview;
        }
      })
      .addCase(changeFavorites.rejected, (state, action) => {
        const {status, offerId} = action.meta.arg;
        const index = state.offers.findIndex((offer) => offer.id === offerId);
        if (index !== -1) {
          state.offers[index].isFavorite = !status;
        }
      })
      .addMatcher(isActionPending(OFFERS_SLICE_NAME),
        (state) => {
          state.requestStatus = RequestStatus.Loading;
        })
      .addMatcher(isActionRejected(OFFERS_SLICE_NAME),
        (state) => {
          state.requestStatus = RequestStatus.Failed;
        });
  },
  selectors: {
    offers: (state: OffersState) => state.offers,
    city: (state: OffersState) => state.currentCity,
    getOffersLoadingStatus: (state: OffersState) => state.requestStatus,
  },
});
