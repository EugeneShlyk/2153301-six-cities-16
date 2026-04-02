import RatingInput from 'src/components/rating-input';
import {ExtraClassButton, RATING, TextButton} from '@constants';
import {ChangeEvent, FormEvent, useState} from 'react';
import ButtonSubmit from '@components/button-submit';
import {useActionCreators} from '@store/hooks/use-action-creator.ts';
import {reviewsAction} from '@slices/reviews';
import {RatingStars} from '@slices/reviews/types.ts';
import {PostReviewsProps} from '@slices/reviews/types.ts';

type ReviewsFormProps = {
  offerId: string;
}

type UserAnswerState = {
  rating: RatingStars | 0;
  comment: string;
}

export default function ReviewsForm({offerId}: ReviewsFormProps) {
  const [userAnswer, setUserAnswer] = useState<UserAnswerState>({
    rating: 0,
    comment: '',
  });
  const isValid = userAnswer.rating > 0 &&
    userAnswer.comment.length >= 50 &&
    userAnswer.comment.length <= 300;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {value, name,} = event.target;

    (setUserAnswer((prev) => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value
    })));
  };
  const {postReview} = useActionCreators(reviewsAction);
  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValid && userAnswer.rating !== 0) {
      const reviewData: PostReviewsProps = {
        offerId: offerId,
        body: {
          comment: userAnswer.comment,
          rating: userAnswer.rating,
        }
      };
      const result = postReview(reviewData);
      console.log(result);
    }
  };
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onFormSubmit}>
      <label className="reviews__label form__label" htmlFor="comment">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATING.map((item) => (
          <RatingInput
            key={item.stars}
            value={item.stars}
            title={item.title}
            onChange={handleInputChange}
            isChecked={userAnswer.rating === item.stars}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        value={userAnswer.comment}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleInputChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <ButtonSubmit extraClass={ExtraClassButton.reviews} isValid={isValid}>
          {TextButton.submit}
        </ButtonSubmit>
      </div>
    </form>
  );
}
