import {JSX} from 'react';
import ReviewsList from '@components/reviews-list';
import CommentForm from '@components/comment-form';
import {Review} from '@customType/reviews.ts';
import {useAuth} from '../../hooks/use-auth.ts';

type TReviewsProps = {
  reviews: Review[];
}

export default function Reviews({reviews}: TReviewsProps): JSX.Element {
  const {isAuth} = useAuth();

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewsList reviews={reviews}/>
      {isAuth && <CommentForm/>}
    </section>
  );
}
