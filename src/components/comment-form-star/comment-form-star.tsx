import {JSX} from 'react';
import {ChangeEvent} from 'react';

type CommentFormStarProp = {
  key: string;
  value: number;
  title: string;
  onChange: ({target}: ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}

export default function CommentFormStar({key, value, title, onChange, isChecked}: CommentFormStarProp): JSX.Element {
  return (
    <>
      <input
        key={key}
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        onChange={onChange}
        checked={isChecked}
      />
      <label
        htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg
          className="form__star-image"
          width={37}
          height={33}
        >
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>
    </>
  );
}
