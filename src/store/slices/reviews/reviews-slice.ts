import {Review} from '@customType/reviews.ts';
import {REVIEWS} from '@mocks/reviews.ts';
import {createSlice} from '@reduxjs/toolkit';
import {REVIEWS_SLICE_NAME} from '@slices/slice-name.ts';

const initialState: ReviewsState = {
  items: REVIEWS,
};

export const reviewsSlice = createSlice({
  name: REVIEWS_SLICE_NAME,
  initialState,
  reducers: {
  },
  // extraReducers: (builder) => {
  //   builder
  //
  // },
  selectors: {
    reviews: (state) => state.items,
  }
});
