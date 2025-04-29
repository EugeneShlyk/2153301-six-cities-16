import {spaceToUnderscore} from '@utils/utils.tsx';
import {LocationListProps} from '@customType/props.ts';
import {Link} from 'react-router-dom';
import {AppRoute} from '@constants';
import clsx from 'clsx';

export default function LocationList({locations, currentCity, setCurrentCity}: LocationListProps): JSX.Element {
  // currentCity
  // console.log(locations.name);
  Object.values(locations).map((location) => console.log(location.name));
  // console.log(currentCity.name);
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(locations).map((city) => (
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
