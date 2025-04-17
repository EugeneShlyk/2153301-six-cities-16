import {OfferPreview} from '@customType/offer.ts';
import PlacesSorting from '@components/places-sorting/places-sorting';
import Header from '@components/header';
import NoOffers from '@components/no-offers';
import OfferCard from '@components/offer-card';
import MapBox from '@components/map-box';
import LocationList from '@components/location-list';
import {MainPageProps} from '@customType/props.ts';
import {useState} from 'react';
import {mapClasses} from '@constants';

function MainPage({offers, locations, currentCity, setCurrentCity}: MainPageProps): JSX.Element {
  const offersCurrentCity: OfferPreview[] = offers.filter((offer: OfferPreview): boolean => offer.city.name === currentCity.name);
  const [hoveredOfferId, setHoveredOfferId] = useState<string | undefined>(undefined);
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList locations={locations} setCurrentCity={setCurrentCity}></LocationList>
        </div>
        {
          offers.length > 0 ? (
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersCurrentCity.length} places to stay in {currentCity.name}</b>
                  <PlacesSorting/>

                  <div className="cities__places-list places__list tabs__content">
                    {offersCurrentCity.map((dataCard: OfferPreview) => (
                      <OfferCard
                        offer={dataCard}
                        variant="cities"
                        size="large"
                        key={dataCard.id}
                        onOverCard={() => setHoveredOfferId(dataCard.id)}
                      />
                    ))}
                  </div>
                </section>
                <div className="cities__right-section">
                  <MapBox currentCity={currentCity} offersOfCity={offersCurrentCity} hoveredOfferId={hoveredOfferId} mapClass={mapClasses.mainPage}></MapBox>
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
