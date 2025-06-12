import {SORT_OPTIONS, SortOption} from '@constants';
import {spaceToUnderscore} from '@utils/utils';
import PlacesSortingItem from '@components/places-sorting-item';
import clsx from 'clsx';
import {useState} from 'react';

type TPlacesSortingProp = {
  current: SortOption;
  setter: (option: SortOption) => void;
}

function PlacesSorting({current, setter}: TPlacesSortingProp): JSX.Element {
  const [isOpened, setOpen] = useState<boolean>(false);

  const selectedOption = SORT_OPTIONS[current];

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
                  Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={clsx(
        'places__options places__options--custom',
        isOpened && 'places__options--opened'
      )}
      >
        {/*<ul className="places__options places__options--custom places__options--opened">*/}
        {SORT_OPTIONS.map((item: string) => <PlacesSortingItem sortingItem={item} key={spaceToUnderscore(item)}/>)}
      </ul>
    </form>
  );
}

export default PlacesSorting;

