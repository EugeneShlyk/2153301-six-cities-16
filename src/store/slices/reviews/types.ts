import {Review} from '@customType/reviews.ts';
import {RequestStatus} from '@constants';

export interface IReviewsState {
  reviews: Review[];
  requestStatus: RequestStatus;
}
