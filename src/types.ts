import { Dayjs } from 'dayjs';

export type DatePickerType = 'date' | 'dates' | 'range'

export interface DateRange<T = Dayjs> {
	from?: T,
	to?: T
}
