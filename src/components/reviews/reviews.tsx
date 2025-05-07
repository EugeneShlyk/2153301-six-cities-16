import {JSX} from 'react';
import ReviewsList from '@components/reviews-list';
import {AuthorizationStatus} from '@constants';
import CommentForm from '@components/comment-form';
import {Review} from '@customType/reviews.ts';

type TReviewsProps = {
  reviews: Review[];
}

const auth: AuthorizationStatus = AuthorizationStatus.Auth;

export default function Reviews({reviews}: TReviewsProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewsList/>
      {auth === AuthorizationStatus.Auth && <CommentForm/>}
    </section>
  );
}
