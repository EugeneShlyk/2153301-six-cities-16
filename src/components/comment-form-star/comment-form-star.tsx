import {JSX} from 'react';

type CommentFormStarProp = {
  number: number;
}

export default function CommentFormStar({number}: CommentFormStarProp): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden" name="rating" value={number} id={`${number}-stars`}
        type="radio"
      />
      <label htmlFor={`${number}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}
