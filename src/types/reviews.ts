import {Host} from '@customType/host.ts';

export type Review = {
  id: string;
  date: string;
  user: Host;
  comment: string;
  rating: number;
}
