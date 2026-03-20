import {Review} from '@customType/reviews.ts';
import {getMonthYear, getYearMonthDay} from '@utils/dayjs-transformation.ts';
import RatingDisplay from '@components/rating-display';
import {ExtraClassRating} from '@constants';

type ReviewsItemProps = {
  review: Review;
}

export default function ReviewsItem({review}: ReviewsItemProps): JSX.Element {
  const ratingNumber = review.rating;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <RatingDisplay rating={ratingNumber} extraClassName={ExtraClassRating.reviews}/>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={getYearMonthDay(review.date)}>{getMonthYear(review.date)}</time>
      </div>
    </li>
  );
}
