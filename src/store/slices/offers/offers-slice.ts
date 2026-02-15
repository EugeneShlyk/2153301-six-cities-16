import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CITIES, CitiesName, RequestStatus} from '@constants';
import {IOffersState} from '@slices/offers/types.ts';
import {OFFERS_SLICE_NAME} from '@slices/slice-name.ts';
import {fetchOffersAction} from '@slices/offers/offers-thunk.ts';
import {OfferPreview} from '@customType/offer.ts';
import {isActionPending, isActionRejected} from '@utils/redux.ts';


const initialState: IOffersState = {
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
      .addCase(fetchOffersAction.fulfilled,
        (state, action: PayloadAction<OfferPreview[]>) => {
          state.offers = action.payload;
          state.requestStatus = RequestStatus.Success;
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
    offers: (state: IOffersState) => state.offers,
    city: (state: IOffersState) => state.currentCity,
  },
});
