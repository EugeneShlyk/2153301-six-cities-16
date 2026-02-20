import {JSX} from 'react';
import ReviewsList from '@components/reviews-list';
import {AuthorizationStatus} from '@constants';
import {getAuthorizationStatus} from '@mocks/getAuthorizationStatus.ts';
import CommentForm from '@components/comment-form';
import {Review} from '@customType/reviews.ts';

type TReviewsProps = {
  reviews: Review[];
}

export default function Reviews({reviews}: TReviewsProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewsList reviews={reviews} />
      {getAuthorizationStatus() === AuthorizationStatus.Auth && <CommentForm/>}
    </section>
  );
}
