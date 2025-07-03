import {Link} from 'react-router-dom';
import {AppRoute} from '@constants';
import clsx from 'clsx';
import {CITIES} from '@constants';
import {useAppSelector} from '../../store/hooks/useAppSelector.ts';
import {offersSelector} from '../../store/slices/offers';
import {useAppDispatch} from '../../store/hooks/useAppDispatch.ts';
import {MouseEvent} from 'react';

export default function LocationList(): JSX.Element {
  const currentCity = useAppSelector(offersSelector.city);
  const dispatch = useAppDispatch();
  const onCityClickHandler = (
    evt: MouseEvent<HTMLElement>,

  ) => {
    evt.preventDefault();
    // const value = evt.target.value;
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li key={city.name} className="locations__item">
              <Link className={clsx('locations__item-link tabs__item', {
                'tabs__item--active': city.name === currentCity
              })} to={AppRoute.Root} onClick={() => console.log('pushed button change city')}
              >
                <span>{city.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
