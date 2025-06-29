import PlacesSorting from '@components/places-sorting';
import OfferList from '@components/offer-list';
import {OfferPreview} from '@customType/offer.ts';
import OfferCard from '@components/offer-card';
import MapBox from '@components/map-box';
import {mapClasses, SortOption, CitiesName} from '@constants';
import {useState} from 'react';
import NoOffers from '@components/no-offers';
import clsx from 'clsx';

type TPlacesListProps = {
  cityName: CitiesName;
  offersCurrentCity: OfferPreview[];
  extraClass: string;
}

function PlacesListSection({cityName, offersCurrentCity, extraClass}: TPlacesListProps) {
  const [hoveredOfferId, setHoveredOfferId] = useState<string | null>(null);
  const [activeSort, setActiveSort] = useState(SortOption.Popular);

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

  return isEmpty ? (
    <NoOffers currentLocation={cityName}/>
  ) : (
    <div className={clsx(
      'cities__places-container container',
      isEmpty && 'cities__places-container--empty',)}
    >
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersCurrentCity.length} places to stay in {cityName.toLowerCase()}</b>
        <PlacesSorting current={activeSort} setter={setActiveSort}/>
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
        </OfferList>
      </section>
      <div className="cities__right-section">
        <MapBox
          cityName={cityName}
          offersOfCity={offersCurrentCity}
          hoveredOfferId={hoveredOfferId}
          mapClass={mapClasses.mainPage}
        />
      </div>
    </div>
  );
}

export default PlacesListSection;
