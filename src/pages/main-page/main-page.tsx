import {OfferPreview} from '@customType/offer.ts';
import Header from '@components/header';
import LocationList from '@components/location-list';
import {MainPageProps} from '@customType/props.ts';
import PlacesListSection from '@components/places-list-section';

function MainPage({offers, currentCity, setCurrentCity}: MainPageProps): JSX.Element {
  const offersCurrentCity: OfferPreview[] = offers.filter((offer: OfferPreview): boolean => offer.city.name === currentCity.name);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationList currentCity={currentCity} setCurrentCity={setCurrentCity}></LocationList>
        <PlacesListSection
          currentCity={currentCity}
          offersCurrentCity={offersCurrentCity}
          extraClass="cities__places-list tabs__content"
        />
      </main>
    </div>
  );
}

export default MainPage;
