import { format, parseISO, differenceInHours } from 'date-fns';
import { DRAWER_DATE_FORMAT } from './constants';

export const getMockCaregiverAvatar = (size: number): string =>
  `https://picsum.photos/${size}/${size}`;

export const getFormattedDate = (date: string): string =>
  format(parseISO(date), DRAWER_DATE_FORMAT);

export const getHoursForWeek = (startDate: string, endDate: string): number =>
  differenceInHours(parseISO(startDate), parseISO(endDate));
