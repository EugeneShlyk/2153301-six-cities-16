import {OFFERS} from '@mocks/offers.ts';

export const virtualFullOffers = OFFERS.map((offer) => ({
  id: offer.id,
  title: offer.title,
  type: offer.type,
  price: offer.price,
  city: offer.city,
  location: offer.location,
  isFavorite: offer.isFavorite,
  isPremium: offer.isPremium,
  rating: offer.rating,
  description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
  bedrooms: 3,
  goods: ['Heating', 'Washing machine', 'Cabel TV'],
  host: {
    name: 'Oliver Conner',
    avatarUrl: 'img/avatar-max.jpg',
    isPro: true,
  },
  images: ['https://url-to-image/image.png'],
  maxAdults: 4,
}));
