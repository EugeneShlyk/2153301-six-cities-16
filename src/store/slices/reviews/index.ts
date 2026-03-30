import {reviewsSlice} from '@slices/reviews/reviews-slice.ts';
import {fetchReviews, postReview} from '@slices/reviews/reviews-thunk.ts';

export const reviewsAction = {...reviewsSlice.actions, fetchReviews: fetchReviews, postReview: postReview};
export const reviewsSelector = reviewsSlice.selectors;

export default reviewsSlice;
