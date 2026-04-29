import {OfferPreview} from '@customType/offer.ts';
import LocationList from '@components/location-list';
import PlacesListSection from '@components/places-list-section';
import {useAppSelector} from '@store/hooks/use-app-selector.ts';
import {offersSelector, offersAction} from '@slices/offers';
import {useEffect} from 'react';
import {useActionCreators} from '@store/hooks/use-action-creator.ts';
import {useOutletContext} from 'react-router-dom';

function MainPage(): JSX.Element {
  const currentCity = useAppSelector(offersSelector.city);
  const offers = useAppSelector(offersSelector.offers);
  // const {fetchOffers} = useActionCreators(offersAction);
  const {searchQuery} = useOutletContext<{ searchQuery: string }>();
  //
  // useEffect(() => {
  //   performance.mark('offers-start'); //checking
  //   fetchOffers();
  // }, [fetchOffers]);

  const offersCurrentCity: OfferPreview[] = offers?.filter((offer: OfferPreview): boolean => offer.city.name === currentCity) ?? [];
  const offerSearched = offersCurrentCity.filter((offer) => offer.title.toLowerCase().includes(searchQuery));
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <LocationList/>
      <div className="cities">
        <PlacesListSection
          cityName={currentCity}
          offersCurrentCity={offerSearched}
          extraClass="cities__places-list tabs__content"
        />
      </div>
    </>
  );
}

export default MainPage;
