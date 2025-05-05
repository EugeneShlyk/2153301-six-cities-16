import {Review} from '@customType/reviews-type.ts';
import ReviewsItem from '@components/reviews-item';

type ReviewListProp = {
  reviews: Review[];
}

export default function ReviewsList({reviews}: ReviewListProp): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review: Review) => (
        <ReviewsItem review={review} key={review.id}></ReviewsItem>
      ))}
    </ul>
  );
}
