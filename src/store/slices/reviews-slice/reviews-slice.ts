import {Review} from '@customType/reviews.ts';
import {REVIEWS} from '@mocks/reviews.ts';
import {createSlice} from '@reduxjs/toolkit';
import {REVIEWS_SLICE_NAME} from '@slices/slice-name.ts';


type ReviewsState = {
  items: Review[];
}

const initialState: ReviewsState = {
  items: REVIEWS,
};

export const rewiewsSlice = createSlice({
  name: REVIEWS_SLICE_NAME,
  initialState,
  reducers: {

  },
  selectors: {
    rewiews: (state) => state.items,
  }
})
