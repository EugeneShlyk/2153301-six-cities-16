import {OfferPreview} from '@customType/offer.ts';

export const OFFERS_FOR_OFFER_PAGE : OfferPreview[] = [
  {
    id: 'f641a4cd-06b9-4a1d-8957-3e19fcad7948',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'house',
    price: 709,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.4,
  },
  {
    id: '74ca1674-145a-4f32-872b-0cb76db0926c',
    title: 'House in countryside',
    type: 'room',
    price: 145,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.8,
  },
  {
    id: 'ffb99d6b-6767-4150-8327-423581c9e2ac',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'house',
    price: 355,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.3,
  },
]
