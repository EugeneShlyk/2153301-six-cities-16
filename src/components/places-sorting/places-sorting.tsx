import {sortingItems} from '@constants';
import {spaceToUnderscore} from '@utils/utils';
import PlacesSortingItem from '@components/places-sorting-item';
import clsx from 'clsx';
import {useState} from 'react';

type TPlacesSortingProp = {
  currentSorting: ;
  setter: (sorting: string) => void;
}

function PlacesSorting({currentSorting, setter}: TPlacesSortingProp): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenSortingClick = (event) => {
    event.preventDefault();
    if() {
      event.closest()
    }
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
                  Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={clsx(
        'places__options places__options--custom',
        isOpen && 'places__options--opened'
      )}
      >
        {/*<ul className="places__options places__options--custom places__options--opened">*/}
        {sortingItems.map((item: string) => <PlacesSortingItem sortingItem={item} key={spaceToUnderscore(item)}/>)}
      </ul>
    </form>
  );
}

export default PlacesSorting;

