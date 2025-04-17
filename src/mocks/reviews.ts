import {Review} from '@customType/reviews-type.ts';

export const REVIEWS: Review[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-10-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  },
  {
    id: 'b67ddfd5-b953-6a30-8c8d-bd083cd6b62a',
    date: '1994-04-05T14:13:56.569Z',
    user: {
      name: 'Kurt Cobain',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    comment: 'I hate myself and I want to die.',
    rating: 5
  }
];
