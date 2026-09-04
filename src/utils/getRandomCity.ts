import {LOCATIONS} from '@constants';

export function getRandomCity(locations: typeof LOCATIONS) {
  const randomIndex = Math.floor(Math.random() * locations.length);
  return locations[randomIndex];
}
