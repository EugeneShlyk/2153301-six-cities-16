import {Review} from '@customType/reviews.ts';
import {RequestStatus} from '@constants';

export type ReviewsState = {
  reviews: Review[];
  requestStatus: RequestStatus;
}
