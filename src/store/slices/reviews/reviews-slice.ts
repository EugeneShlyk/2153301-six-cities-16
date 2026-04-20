import {createSlice} from '@reduxjs/toolkit';
import {REVIEWS_SLICE_NAME} from '@slices/slice-name.ts';
import {ReviewsState} from '@slices/reviews/types.ts';
import {fetchReviews, postReview} from '@slices/reviews/reviews-thunk.ts';
import {RequestStatus} from '@constants';
import {isActionPending, isActionRejected} from '@utils/redux.ts';

const initialState: ReviewsState = {
  reviews: [],
  requestStatus: RequestStatus.Idle,
};

export const reviewsSlice = createSlice({
  name: REVIEWS_SLICE_NAME,
  initialState,
  reducers: {
    clearReviews: (state: ReviewsState) => {
      state.reviews = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.fulfilled,
        (state, action) => {
          state.reviews = action.payload;
          state.requestStatus = RequestStatus.Success;
        })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })
      .addMatcher(isActionPending(REVIEWS_SLICE_NAME),
        (state) => {
          state.requestStatus = RequestStatus.Loading;
        })
      .addMatcher(isActionRejected(REVIEWS_SLICE_NAME),
        (state) => {
          state.requestStatus = RequestStatus.Failed;
        });
  },
  selectors: {
    reviews: (state) => state.reviews,
    requestStatus: (state) => state.requestStatus,
  }
});
