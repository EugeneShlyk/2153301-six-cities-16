import dayjs from 'dayjs';
import {FORMAT_MONTH_YEAR} from '@constants';

export const getMonthYear = (date: string): string => dayjs(date).format(FORMAT_MONTH_YEAR);
