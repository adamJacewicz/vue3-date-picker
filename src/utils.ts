import dayjs, { Dayjs, OpUnitType } from 'dayjs';

export const getDateRange = (startDate: Dayjs, endDate: Dayjs): Dayjs[] => {
  const range: Dayjs[] = [];
  const diff = Math.abs(endDate.diff(startDate, 'days'));
  const workDate = startDate.isBefore(endDate) ? startDate : endDate
  for (let i = 0; i <= diff; i++) {
    range.push(workDate.add(i, 'day'));
  }
  return range;
};

export const getWeekdays = (): ReadonlyArray<string> => {
  const weekDays = dayjs.weekdaysMin();
  weekDays.push(weekDays.shift() as string);
  return weekDays;
};

export const getCalendarMonth = (date: Dayjs): Dayjs[] => (
  getDateRange(
    date
      .startOf('month')
      .startOf('week'),
    date
      .endOf('month')
      .endOf('week'),
  )
)


export const isEndOf = (unit: OpUnitType) => (date: Dayjs) => date.isSame(date.endOf(unit), 'day');
export const isStartOf = (unit: OpUnitType) => (date: Dayjs) => date.isSame(date.startOf(unit), 'day');
export const isEndOfWeek = isEndOf('week');
export const isEndOfMonth = isEndOf('month');
export const isStartOfWeek = isStartOf('week');
export const isStartOfMonth = isStartOf('month');
