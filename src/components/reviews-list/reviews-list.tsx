import {Review} from '@customType/reviews.ts';
import ReviewsItem from '@components/reviews-item';
import {JSX} from 'react';

type Reviews = {
  reviews: Review[];
}

export default function ReviewsList({reviews}: Reviews): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.slice(0, 10).map((review: Review) => (
        <ReviewsItem
          review={review}
          key={review.id}
        />
      ))}
    </ul>
  );
}
