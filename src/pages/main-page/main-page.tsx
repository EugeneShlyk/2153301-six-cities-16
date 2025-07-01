import {OfferPreview} from '@customType/offer.ts';
import Header from '@components/header';
import LocationList from '@components/location-list';
import {MainPageProps} from '@customType/props.ts';
import PlacesListSection from '@components/places-list-section';
import {CitiesName} from '@constants';

const cityName = CitiesName.Paris;

function MainPage({offers, currentCity, setCurrentCity}: MainPageProps): JSX.Element {
  const offersCurrentCity: OfferPreview[] = offers.filter((offer: OfferPreview): boolean => offer.city.name === cityName);

  console.log(currentCity);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationList currentCity={currentCity} setCurrentCity={setCurrentCity}></LocationList>
        <div className="cities">
          <PlacesListSection
            cityName={cityName}
            offersCurrentCity={offersCurrentCity}
            extraClass="cities__places-list tabs__content"
          />
        </div>
      </main>
    </div>
  );
}

export default MainPage;
