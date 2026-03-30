import {OfferPreview, OfferWithImage} from '@customType/offer.ts';

export const adaptToOfferPreview = (offer: OfferWithImage): OfferPreview => ({
  id: offer.id,
  title: offer.title,
  type: offer.type,
  price: offer.price,
  city: offer.city,
  location: offer.location,
  isFavorite: offer.isFavorite,
  isPremium: offer.isPremium,
  rating: offer.rating,
  previewImage: offer.previewImage,
});
