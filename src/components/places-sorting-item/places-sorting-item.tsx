import clsx from 'clsx';
import {useActionCreators} from '@store/hooks/use-action-creator.ts';
import {offersAction} from '@slices/offers';
import {SORT_OPTIONS} from '@constants';

interface PlacesSortingItemProps {
  sortingItem: string;
  setOpen: (open: boolean) => void;
  setterOpenSort: (sort: number) => void;
  SortOptionIndex: number;
  // selectedOption: string;
}

export default function PlacesSortingItem({
  sortingItem,
  setterOpenSort,
  SortOptionIndex,
  setOpen,
  // selectedOption,
}: PlacesSortingItemProps): JSX.Element {
  const {changeSort} = useActionCreators(offersAction);
  const selectedOption = SORT_OPTIONS[SortOptionIndex];
  return (
    <li
      className={clsx(
        'places__option',
        selectedOption === sortingItem && 'places__option--active'
      )}
      tabIndex={0}
      onClick={() => {
        setOpen(false);
        setterOpenSort(SortOptionIndex);
        changeSort(SortOptionIndex);
      }}
    >
      {sortingItem}
    </li>
  );
}
