import {SORT_OPTIONS} from '@constants';
import PlacesSortingItem from '@components/places-sorting-item';
import clsx from 'clsx';
import {useState} from 'react';
import React from 'react';
import {useAppSelector} from '@store/hooks/use-app-selector.ts';
import {offersSelector} from '@slices/offers';

function PlacesSorting(): JSX.Element {
  const [isOpened, setOpen] = useState<boolean>(false);
  const activeSort = useAppSelector(offersSelector.getActiveSort);

  const onSortOpenClick = (evt: React.MouseEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const target = evt.target as HTMLInputElement;

    if (target.closest('.places__sorting') && target.tagName !== 'LI') {
      setOpen((prevState) => !prevState);
    }
  };

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={onSortOpenClick}
    >
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0}>
        {SORT_OPTIONS[activeSort]}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={clsx(
        'places__options places__options--custom',
        isOpened && 'places__options--opened'
      )}
      >
        {SORT_OPTIONS.map((nameSort: string, index: number) => (
          <PlacesSortingItem
            sortingItem={nameSort}
            setOpen={setOpen}
            key={nameSort}
            SortOptionIndex={index}
          />
        ))}
      </ul>
    </form>
  );
}

export default PlacesSorting;

