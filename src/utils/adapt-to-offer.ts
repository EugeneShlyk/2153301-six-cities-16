import {Offer, OfferWithImage} from '@customType/offer.ts';

export const adaptToOffer = (data: OfferWithImage): Offer => ({
  id: data.id,
  title: data.title,
  type: data.type,
  price: data.price,
  city: data.city,
  location: data.location,
  isFavorite: data.isFavorite,
  isPremium: data.isPremium,
  rating: data.rating,

  // Поля, специфичные для Offer
  description: data.description,
  bedrooms: data.bedrooms,
  goods: data.goods,
  host: data.host,
  images: data.images,
  maxAdults: data.maxAdults,
});

