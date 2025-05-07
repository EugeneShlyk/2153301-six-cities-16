import dayjs from 'dayjs';
import {FORMAT_MONTH_YEAR} from '@constants';

export const getMonthYear = (date: string): string => dayjs(date).format(FORMAT_MONTH_YEAR);
export const getYearMonthDay = (date: string) => dayjs(date).format('YYYY-MM-DD');
