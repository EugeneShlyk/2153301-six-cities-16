import {Link} from 'react-router-dom';
import {AppRoute, CitiesName} from '@constants';
import clsx from 'clsx';
import {CITIES} from '@constants';
import {offersAction} from '@slices/offers';
import {MouseEvent, useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import {useActionCreators} from '@store/hooks/use-action-creator.ts';

export default function LocationList(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCity: CitiesName = searchParams.get('city') as CitiesName;
  const {changeCity} = useActionCreators(offersAction);

  useEffect(() => {
    if (!currentCity) {
      const defaultCity = CITIES[0].name;
      setSearchParams({'city': defaultCity});
      // changeCity(defaultCity);
    }
  }, [setSearchParams, currentCity]);

  const onCityClickHandler = (
    evt: MouseEvent<HTMLElement>,
    cityName: CitiesName
  ) : void => {
    evt.preventDefault();
    if (cityName !== currentCity) {
      changeCity(cityName);
      setSearchParams({'city': cityName});
    }
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li key={city.id} className="locations__item">
              <Link className={clsx('locations__item-link tabs__item', {
                'tabs__item--active': city.name === currentCity
              })} to={AppRoute.Root} onClick={(evt) => onCityClickHandler(evt, city.name)}
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
