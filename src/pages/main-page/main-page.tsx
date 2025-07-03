import {OfferPreview} from '@customType/offer.ts';
import Header from '@components/header';
import LocationList from '@components/location-list';
import PlacesListSection from '@components/places-list-section';
import {CitiesName} from '@constants';
import {useAppSelector} from '../../store/hooks/useAppSelector.ts';
import {offersSelector} from '../../store/slices/offers';

const cityName = CitiesName.Paris;

function MainPage(): JSX.Element {
  const currentCity = useAppSelector(offersSelector.city);
  const offers = useAppSelector(offersSelector.offers);
  const offersCurrentCity: OfferPreview[] = offers.filter((offer: OfferPreview): boolean => offer.city.name === currentCity);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationList/>
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
