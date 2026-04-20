import {createAppAsyncThunk} from '@store/hooks/create-app-async-thunk.ts';
import {REVIEWS_SLICE_NAME} from '@slices/slice-name.ts';
import {ENDPOINTS} from '@constants';
import {Review} from '@customType/reviews.ts';
import {PostReviewsProps} from '@slices/reviews/types.ts';

export const fetchReviews = createAppAsyncThunk<Review[], string>(
  `${REVIEWS_SLICE_NAME}/fetchReviews`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Review[]>(`${ENDPOINTS.COMMENTS}/${offerId}`);
    return data;
  }
);

export const postReview = createAppAsyncThunk<Review, PostReviewsProps>(
  `${REVIEWS_SLICE_NAME}/postReview`,
  async ({body, offerId}, {extra: api}) => {
    const {data} = await api.post<Review>(`${ENDPOINTS.COMMENTS}/${offerId}`, body);
    return data;
  }
);
