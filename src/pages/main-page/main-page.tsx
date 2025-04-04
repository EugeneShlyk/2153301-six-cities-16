import {CityMap} from '@constants';
import {OfferPreview} from '@customType/offer';
import PlacesSorting from '@components/places-sorting/places-sorting';
import {spaceToUnderscore} from '@utils/utils';
import Header from '@components/header';
import NoOffers from '@components/no-offers';
import OfferCard from '@components/offer-card';
import Map from '@components/map';
import {City} from '@customType/city.ts';

type MainPageProps = {
  offers: OfferPreview[];
  locations: typeof CityMap;
  currentCity: City;
  setCurrentCity: (city: City) => void;
};

function MainPage({offers, locations, currentCity, setCurrentCity}: MainPageProps): JSX.Element {
  const offersCurrentCity = offers.filter((offer: OfferPreview) : boolean => offer.city.name === currentCity.name);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
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
        </div>
        {
          offers.length > 0 ? (
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">312 places to stay in Amsterdam</b>
                  <PlacesSorting/>

                  <div className="cities__places-list places__list tabs__content">
                    {offersCurrentCity.map((dataCard : OfferPreview) => (
                      <OfferCard
                        offer={dataCard}
                        variant="cities"
                        size="large"
                        key={dataCard.id}
                      />
                    ))}
                  </div>
                </section>
                <div className="cities__right-section">
                  <Map></Map>
                </div>
              </div>
            </div>
          ) : <NoOffers currentLocation={locations.Paris.name}/>
        }
      </main>
    </div>
  );
}

export default MainPage;
