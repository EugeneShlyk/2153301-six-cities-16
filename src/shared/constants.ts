import {TSizeMap} from '@customType/size';

export type CityName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export const enum SortOption {
  Popular,
  PriceLowToHigh,
  PriceHighToLow,
  TopRatedFirst
}

export const SORT_OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'] satisfies Record<SortOption, string>;

export enum CitiesName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum ENDPOINTS {
  OFFER = '/offers',
}

export const CITIES = [
  {
    id: 'paris',
    location: {latitude: 48.85661, longitude: 2.351499, zoom: 13},
    name: CitiesName.Paris
  },
  {
    id: 'cologne',
    location: {latitude: 50.938361, longitude: 6.959974, zoom: 13},
    name: CitiesName.Cologne,
  },
  {
    id: 'brussels',
    location: {latitude: 50.846557, longitude: 4.351697, zoom: 13},
    name: CitiesName.Brussels
  },
  {
    id: 'amsterdam',
    location: {latitude: 52.37454, longitude: 4.897976, zoom: 13},
    name: CitiesName.Amsterdam
  },
  {
    id: 'hamburg',
    location: {latitude: 53.550341, longitude: 10.000654, zoom: 13},
    name: CitiesName.Hamburg
  },
  {
    id: 'dusseldorf',
    location: {latitude: 51.225402, longitude: 6.776314, zoom: 13},
    name: CitiesName.Dusseldorf
  },
] as const;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '*'
}

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

export const galleryPhoto: string[] = [
  'img/room.jpg',
  'img/apartment-01.jpg',
  'img/apartment-02.jpg',
  'img/apartment-03.jpg',
  'img/apartment-04.jpg',
  'img/studio-01.jpg',
];

export const enum RequestStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Failed = 'failed',
}

export const BACKEND_URL: string = 'https://16.design.htmlacademy.pro/six-cities';
export const REQUEST_TIMEOUT = 5000;
export const AUTH_TOKEN_KEY_NAME = 'six cities token';
