import {ChangeEvent, JSX} from 'react';
import style from './style.module.scss';

type SearchInputProps = {
  oneSearch: (value: string) => void;
};

export default function SearchInput({oneSearch}: SearchInputProps): JSX.Element {
  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    oneSearch(evt.target.value);
  };
  return (
    <div>
      <input
        className={style.header__search}
        onChange={onChange}
        type="text"
        placeholder="Поиск..."
      />
    </div>
  );
}
