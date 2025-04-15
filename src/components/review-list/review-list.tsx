import {Review} from '@customType/reviews-type.ts';

type ReviewListProp = {
  reviews: Review[];
}

export default function ReviewList({reviews}: ReviewListProp): JSX.Element {
  return (
    <ul className="reviews__list"></ul>
  );
}
