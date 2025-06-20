import {spaceToUnderscore} from '@utils/utils.tsx';
import {LocationListProps} from '@customType/props.ts';
import {Link} from 'react-router-dom';
import {AppRoute} from '@constants';
import clsx from 'clsx';
import {CityMap, CITIES} from '@constants';


export default function LocationList({ currentCity, setCurrentCity}: LocationListProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <li key={spaceToUnderscore(city.name)} className="locations__item">
            <Link className={clsx('locations__item-link tabs__item', {
              'tabs__item--active': city.name === currentCity.name
            })} to={AppRoute.Root} onClick={() => setCurrentCity(city)}
            >
              <span>{city.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
