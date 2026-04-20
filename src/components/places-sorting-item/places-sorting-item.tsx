import clsx from 'clsx';

interface PlacesSortingItemProps {
  sortingItem: string;
  setOpen: (open: boolean) => void;
  setterOpenSort: (sort: number) => void;
  SortOptionIndex: number;
  selectedOption: string;
}

export default function PlacesSortingItem({
  sortingItem,
  setterOpenSort,
  SortOptionIndex,
  setOpen,
  selectedOption,
}: PlacesSortingItemProps): JSX.Element {
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
      }}
    >
      {sortingItem}
    </li>
  );
}
