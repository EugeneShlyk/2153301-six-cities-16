import {CitiesName} from '@constants';
import {City} from '@customType/city.ts';

export type CityMapType = {
  [key: string]: City;
};

export type NoOffersProps = {
  currentLocation: CitiesName;
}
