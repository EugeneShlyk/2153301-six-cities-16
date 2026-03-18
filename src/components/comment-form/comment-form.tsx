import CommentFormStar from '@components/comment-form-star';
import {RATING} from '@constants';
import {ChangeEvent, useState} from 'react';

export default function CommentForm() {
  const [userAnswer, setUserAnswer] = useState({
    rating: 0,
    review: '',
    isChecked: false,
  });

  console.log(userAnswer);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {value, name, } = event.target;

    (setUserAnswer((prev) => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value
    })));
  };
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATING.map((item) => (
          <CommentFormStar
            key={item.stars}
            value={item.stars}
            title={item.title}
            onChange={handleInputChange}
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
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
