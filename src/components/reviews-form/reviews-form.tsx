import RatingInput from 'src/components/rating-input';
import {
  CommentError,
  ExtraClassButton,
  MAX_COMMENT_LENGTH,
  MIN_COMMENT_LENGTH, PostReviewMessages,
  RATING,
  RequestStatus,
  TextButton,
} from '@constants';
import {ChangeEvent, FormEvent, useState} from 'react';
import ButtonSubmit from '@components/button-submit';
import {reviewsSelector} from '@slices/reviews';
import {RatingStars} from '@slices/reviews/types.ts';
import {PostReviewsProps} from '@slices/reviews/types.ts';
import {useAppSelector} from '@store/hooks/use-app-selector.ts';
import {toast} from 'react-toastify';
import {useAppDispatch} from '@store/hooks/use-app-dispatch.ts';
import {postReview} from '@slices/reviews/reviews-thunk.ts';

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
  const dispatch = useAppDispatch();
  const isValidForm = userAnswer.rating !== 0 &&
    userAnswer.comment.length >= MIN_COMMENT_LENGTH &&
    userAnswer.comment.length <= MAX_COMMENT_LENGTH;
  const isValidRating = userAnswer.rating > 0 && userAnswer.rating < 6;
  const isValidComment =
    userAnswer.comment.length >= MIN_COMMENT_LENGTH &&
    userAnswer.comment.length <= MAX_COMMENT_LENGTH;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {value, name} = event.target;

    (setUserAnswer((prev) => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value
    })));
  };
  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidRating) {
      toast.error(CommentError.RATING_VALIDATION_ERROR);
    }
    if (!isValidComment) {
      toast.error(CommentError.COMMENT_VALIDATION_ERROR);
    }

    if (isValidForm && userAnswer.rating !== 0) {
      const reviewData: PostReviewsProps = {
        offerId: offerId,
        body: {
          comment: userAnswer.comment,
          rating: userAnswer.rating,
        }
      };
      dispatch(postReview(reviewData))
        .unwrap()
        .then(() => {
          setUserAnswer({
            rating: 0,
            comment: '',
          });
          toast.success(PostReviewMessages.POSTED);
        })
        .catch(() => {
          toast.error(PostReviewMessages.REJECTED);
        });
    }
  };
  const requestStatusReviews = useAppSelector(reviewsSelector.requestStatus);
  const isDisabledButton = requestStatusReviews === RequestStatus.Loading;
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
        <ButtonSubmit extraClass={ExtraClassButton.reviews} isValid={isValidForm} disabled={isDisabledButton}>
          {TextButton.submit}
        </ButtonSubmit>
      </div>
    </form>
  );
}
