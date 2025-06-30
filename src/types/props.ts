import {OfferPreview} from '@customType/offer.ts';
import {CitiesName} from '@constants';
import {City} from '@customType/city.ts';
import {Offer} from '@customType/offer.ts';

export type MainPageProps = {
  offers: OfferPreview[];
  currentCity: City;
  setCurrentCity: (city: City) => void;
};

export type OfferPageProps = {
  closestOffers: OfferPreview[];
  FullOffers: Offer[];
}

export type CityMapType = {
  [key: string]: City;
};

export interface LocationListProps {
  // locations: CityMapType; // Пропс для списка городов
  currentCity: City;
  setCurrentCity: (city: City) => void; // Функция для установки текущего города
}

export type NoOffersProps = {
  currentLocation: CitiesName;
}
