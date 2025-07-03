import {Link} from 'react-router-dom';
import {AppRoute, CitiesName} from '@constants';
import clsx from 'clsx';
import {CITIES} from '@constants';
import {useAppSelector} from '../../store/hooks/useAppSelector.ts';
import {offersAction, offersSelector} from '../../store/slices/offers';
import {useAppDispatch} from '../../store/hooks/useAppDispatch.ts';
import {MouseEvent} from 'react';

export default function LocationList(): JSX.Element {
  const currentCity = useAppSelector(offersSelector.city);
  const dispatch = useAppDispatch();

  const onCityClickHandler = (
    evt: MouseEvent<HTMLElement>,
    cityName: CitiesName
  ) => {
    evt.preventDefault();
    dispatch(offersAction.changeCity(cityName));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li key={city.id} className="locations__item">
              <Link className={clsx('locations__item-link tabs__item', {
                'tabs__item--active': city.name === currentCity
              })} to={AppRoute.Root} onClick={ (evt) => onCityClickHandler(evt, city.name)}
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
