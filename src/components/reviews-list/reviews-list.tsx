import {Review} from '@customType/reviews-type.ts';
import ReviewsItem from '@components/reviews-item';
import {REVIEWS} from '@mocks/reviews.ts';
import {JSX} from 'react';

export default function ReviewsList(): JSX.Element {
  return (
    <ul className="reviews__list">
      {REVIEWS.map((review: Review) => (
        <ReviewsItem review={review} key={review.id}></ReviewsItem>
      ))}
    </ul>
  );
}
