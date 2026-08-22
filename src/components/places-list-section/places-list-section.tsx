import PlacesSorting from '@components/places-sorting';
import OfferList from '@components/offer-list';
import {OfferPreview} from '@customType/offer.ts';
import OfferCard from '@components/offer-card';
import MapBox from '@components/map-box';
import {CitiesName, MAP_CLASSES, RequestStatus, SortOption, SPINNER_CLASSES} from '@constants';
import {useState} from 'react';
import NoOffers from '@components/no-offers';
import clsx from 'clsx';
import {useAppSelector} from '@store/hooks/use-app-selector.ts';
import {offersSelector} from '@slices/offers';
import Spinner from '@components/spinner';

type TPlacesListProps = {
  cityName: CitiesName;
  offersCurrentCity: OfferPreview[];
  extraClass: string;
}

function PlacesListSection({cityName, offersCurrentCity, extraClass}: TPlacesListProps) {
  const [hoveredOfferId, setHoveredOfferId] = useState<string | null>(null);
  // const [activeSort, setActiveSort] = useState(SortOption.Popular);
  const isOffersLoading = useAppSelector(offersSelector.getOffersLoadingStatus);
  const activeSort = useAppSelector(offersSelector.getActiveSort);

  const isEmpty = offersCurrentCity.length === 0;

  let sortedOffers = offersCurrentCity;

  switch (activeSort) {
    case SortOption.PriceHighToLow:
      sortedOffers = [...offersCurrentCity].sort((a, b) => b.price - a.price);
      break;
    case SortOption.PriceLowToHigh:
      sortedOffers = [...offersCurrentCity].sort((a, b) => a.price - b.price);
      break;
    case SortOption.TopRatedFirst:
      sortedOffers = [...offersCurrentCity].sort((a, b) => b.rating - a.rating);
      break;
  }

  if (isOffersLoading === RequestStatus.Loading || isOffersLoading === RequestStatus.Idle) {
    return <Spinner extraClass={SPINNER_CLASSES.CONTENT} />;
  }

  if (isEmpty) {
    return <NoOffers currentLocation={cityName}/>;
  }

  return (
    <div className={clsx(
      'cities__places-container container',
      isEmpty && 'cities__places-container--empty',)}
    >
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersCurrentCity.length} places to stay in {cityName}</b>
        <PlacesSorting current={activeSort} setter={setActiveSort}/>
        {isEmpty ? <Spinner extraClass={SPINNER_CLASSES.CONTENT}/> :
          <OfferList
            dataOffers={sortedOffers}
            extraClass={extraClass}
          >
            {(dataOffer: OfferPreview) => (
              <OfferCard
                offer={dataOffer}
                size="large"
                variant="cities"
                key={dataOffer.id}
                onOverCard={setHoveredOfferId}
              />
            )}
          </OfferList>}
      </section>
      <div className="cities__right-section">
        <MapBox
          cityName={cityName}
          offersOfCity={offersCurrentCity}
          hoveredOfferId={hoveredOfferId}
          mapClass={MAP_CLASSES.MAIN_PAGE}
        />
      </div>
    </div>
  );
}

export default PlacesListSection;
