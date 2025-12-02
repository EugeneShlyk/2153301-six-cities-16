import {useBoolean} from '../../hooks/use-boolean.ts';
import clsx from 'clsx';
import React from 'react';

type Size = 'small' | 'medium' | 'large';

type BookmarkProps = {
  isActive: boolean;
  extraClass: 'offer' | 'place-card';
  size: Size;
  actionClick: () => void;
}

function getBookmarkSize(size: Size) {
  if (size === 'small') {
    return {
      width: '18',
      height: '19',
    };
  }
  if (size === 'large') {
    return {
      width: '31',
      height: '33',
    };
  }
}

export default function Bookmark({isActive, extraClass = 'place-card', size, actionClick}: BookmarkProps) {
  const {isOn: isBookmarked, toggle: toggleBookmark} = useBoolean(isActive);
  const classNameObject = {
    [`${extraClass}__bookmark-button`]: !!extraClass,
    [`${extraClass}__bookmark-button--active`]: isBookmarked,
  };
  const bookMarkClass = clsx('button', classNameObject);
  const buttonClickHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    actionClick();
    toggleBookmark();
  };
  return (
    <button
      className={bookMarkClass}
      type="button"
      onClick={buttonClickHandler}
    >
      <svg
        className={`${extraClass}__bookmark-icon`} {...getBookmarkSize(size)}
      >
        <use href="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isBookmarked ? 'In' : 'To'} bookmarks
      </span>
    </button>
  );
}
