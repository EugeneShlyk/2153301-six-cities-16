import {OfferPreview} from '@customType/offer.ts';
import {CitiesName, CityMap} from '@constants';
import {City} from '@customType/city.ts';
import {Review} from '@customType/reviews-type.ts';

export type MainPageProps = {
  offers: OfferPreview[];
  locations: typeof CityMap;
  currentCity: City;
  setCurrentCity: (city: City) => void;
  setSelectedOfferId: (cardId: string) => void;
};

export type OfferPageProps = {
  closestOffers: OfferPreview[];
  reviews: Review[];
  currentCity: City;
}

export type CityMapType = {
  [key: string]: City;
};

export interface LocationListProps {
  locations: CityMapType; // Пропс для списка городов
  setCurrentCity: (city: City) => void; // Функция для установки текущего города
}

export type NoOffersProps = {
  currentLocation: keyof typeof CitiesName;
}
