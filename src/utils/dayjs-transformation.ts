import dayjs from 'dayjs';
import {FORMAT_MONTH_YEAR} from '@constants';

const getMonthYear = (date: string): string => {
  return dayjs(date).format('MMMM YYYY');
};
