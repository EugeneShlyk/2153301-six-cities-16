import {Review} from '@customType/reviews.ts';

export interface IReviews {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
}

export interface ReviewsState {
  items: Review[];
  reviews: Review[];
}
