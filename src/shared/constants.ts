import {TSizeMap} from '@customType/size';

export enum CitiesName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export type CityName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export const enum SortOption {
  Popular,
  PriceLowToHigh,
  PriceHighToLow,
  TopRatedFirst
}

export const SORT_OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'] satisfies Record<SortOption, string>;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '*'
}

export const CityMap = {
  Paris: {name: CitiesName.Paris, location: {latitude: 48.8566, longitude: 2.3522, zoom: 10}, slug: '/paris'},
  Cologne: {name: CitiesName.Cologne, location: {latitude: 50.935173, longitude: 6.953101, zoom: 10}, slug: '/cologne'},
  Brussels: {name: CitiesName.Brussels, location: {latitude: 50.8476, longitude: 4.3572, zoom: 10}, slug: '/brussels'},
  Amsterdam: {
    name: CitiesName.Amsterdam,
    location: {latitude: 52.3676, longitude: 4.9041, zoom: 10},
    slug: '/amsterdam'
  },
  Hamburg: {name: CitiesName.Hamburg, location: {latitude: 53.5488, longitude: 9.9872, zoom: 10}, slug: '/hamburg'},
  Dusseldorf: {
    name: CitiesName.Dusseldorf,
    location: {latitude: 51.2277, longitude: 6.7735, zoom: 10},
    slug: '/dusseldorf'
  },
} as const;

export const DEFAULT_CITY = CityMap.Paris;

export const BookmarkSizeMap: TSizeMap = {
  small: {width: '18', height: '19'},
  large: {width: '31', height: '33'}
} as const;

export const ImageSizeMap: TSizeMap = {
  small: {width: '150', height: '110'},
  large: {width: '260', height: '200'},
} as const;

export type TAuthorizationStatus = 'AUTH' | 'NO_AUTH' | 'UNKNOWN';

export const smallButtonFavoriteDimension = {
  height: '19',
  width: '18',
};

export const largeButtonFavoriteDimensions = {
  height: '33',
  width: '31',
};

export const URL_MARKER_DEFAULT: string = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT: string = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const FORMAT_MONTH_YEAR: string = 'MMMM YYYY';

export const mapClasses = {
  mainPage: 'cities__map',
  offerPage: 'offer__map',
};

export const RATING = [
  {stars: 5, title: 'perfect'},
  {stars: 4, title: 'good'},
  {stars: 3, title: 'not bad'},
  {stars: 2, title: 'badly'},
  {stars: 1, title: 'terribly'}
];

export enum AuthorizationStatus {
  Unknown = 'UNKNOWN',
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
}
