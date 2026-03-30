import {Review} from '@customType/reviews.ts';
import {RequestStatus} from '@constants';
import {OfferPreview} from '@customType/offer.ts';
import {RATING} from '@constants';

export type ReviewsState = {
  reviews: Review[];
  requestStatus: RequestStatus;
}

type RatingStars = typeof RATING[number]['stars'];

export type PostReviewsProps = {
  body: {
    comment: string;
    rating: RatingStars;
  };
  offerId: OfferPreview['id'];
}
