import {spaceToUnderscore} from '@utils/utils.tsx';
import {LocationListProps} from '@customType/props.ts';

export default function LocationList({locations, setCurrentCity}: LocationListProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(locations).map((city) => (
          <li key={spaceToUnderscore(city.name)} className="locations__item">
            <a className="locations__item-link tabs__item" href="#" onClick={() => setCurrentCity(city)}>
              <span>{city.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
