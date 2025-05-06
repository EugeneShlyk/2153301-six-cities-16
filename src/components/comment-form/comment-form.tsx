import CommentFormStar from '@components/comment-form-star';
import {RATING} from '@constants';
import {ChangeEvent, useState} from 'react';

export default function CommentForm() {
  const [userAnswer, setUserAnswer] = useState({
    stars: 0,
    description: ''
  });
  console.log(userAnswer);
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
            onChange={({target}: ChangeEvent<HTMLInputElement>) => {
              setUserAnswer({...userAnswer, stars: Number(target.value)});
            }}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={userAnswer.description}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
          setUserAnswer({...userAnswer, description: target.value});
        }}
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
