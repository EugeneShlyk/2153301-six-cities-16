import {OfferPreview} from '@customType/offer.ts';
import Header from '@components/header';
import LocationList from '@components/location-list';
import PlacesListSection from '@components/places-list-section';
import {useAppSelector} from '@store/hooks/use-app-selector.ts';
import {offersSelector, offersAction} from '@slices/offers';
import {useEffect} from 'react';
import {useActionCreators} from '@store/hooks/use-action-creator.ts';

function MainPage(): JSX.Element {
  const currentCity = useAppSelector(offersSelector.city);
  const offers = useAppSelector(offersSelector.offers);
  const {fetchOffersAction} = useActionCreators(offersAction);

  useEffect(() => {
    fetchOffersAction();
  }, [fetchOffersAction]);
  const offersCurrentCity: OfferPreview[] = offers?.filter((offer: OfferPreview): boolean => offer.city.name === currentCity) ?? [];

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationList/>
        <div className="cities">
          <PlacesListSection
            cityName={currentCity}
            offersCurrentCity={offersCurrentCity}
            extraClass="cities__places-list tabs__content"
          />
        </div>
      </main>
    </div>
  );
}

export default MainPage;
