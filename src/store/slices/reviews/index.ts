import {reviewsSlice} from '@slices/reviews/reviews-slice.ts';
import {fetchReviews} from '@slices/reviews/reviews-thunk.ts';

export const reviewsAction = {...reviewsSlice.actions, fetchReviews: fetchReviews};
export const reviewsSelector = reviewsSlice.selectors;

export default reviewsSlice;
