import {spaceToUnderscore} from '@utils/utils.tsx';
import {CitiesName} from '@constants';

type Location = {
  name: CitiesName;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  slug: string;
};

type CityMapType = {
  [key: string]: Location;
};



export default function LocationList(locations: CityMapType): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(locations).map((city) => (
          <li key={spaceToUnderscore(city.name)} className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>{city.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
