import {LOCATIONS} from '@constants';

export function getRandomCity() {
  const randomIndex = Math.floor(Math.random() * LOCATIONS.length);
  return LOCATIONS[randomIndex];
}
