import RatingInput from 'src/components/rating-input';
import {ExtraClassButton, RATING, TextButton} from '@constants';
import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import ButtonSubmit from '@components/button-submit';
import {useActionCreators} from '@store/hooks/use-action-creator.ts';
import {reviewsAction} from '@slices/reviews';

type ReviewsFormProps = {
  offerId: string;
}

export default function ReviewsForm({offerId}: ReviewsFormProps) {
  const [userAnswer, setUserAnswer] = useState({
    rating: 0,
    review: '',
  });
  const isValid = userAnswer.rating > 0 &&
    userAnswer.review.length >= 50 &&
    userAnswer.review.length <= 300;

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
    useEffect(() => {
      postReview({
        offerId,
      })
    }, []);
  };
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
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
        id="review"
        name="review"
        value={userAnswer.review}
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
