import { computed }                                    from 'vue';
import dayjs, { Dayjs }                                from 'dayjs';
import { getCalendarMonth, getDateRange, getWeekdays } from '@/utils';
import { useStore }                                    from '@/hooks/useStore';

export const useCalendar = (props: any, context: any) => {
		const {
			setRange,
			setHoveredDate,
			isDisabled,
			getDayClass,
			selectedRange,
			hoveredDate,
		} = useStore();
		const weekDays = getWeekdays();
		const daysInMonth = computed(() => getCalendarMonth(props.modelValue));
		const monthTitle = computed(() => props.modelValue.format('MMMM YYYY'));
		const isButtonDisabled = (value: string) => !context.attrs.class.includes(value) && props.disabledBtn;
		const nextMonth = () => context.emit('update:modelValue', props.modelValue.add(1, 'months'));
		const prevMonth = () => context.emit('update:modelValue', props.modelValue.subtract(1, 'months'));
		const dayClass = (date: Dayjs) => date.isSame(props.modelValue, 'month') ? getDayClass(date) : 'disabled';

		const selectDate = (selectedDate: Dayjs) => {
			const [ from, to ] = selectedRange.value;
			const hovered = hoveredDate.value;
			if (from && !to) {
				const range = [ hovered, from ];
				selectedDate.isAfter(from) && range.reverse();
				setRange(range);
			} else {
				setRange([ selectedDate, null ]);
				setHoveredDate(selectedDate);
			}
		};

		const onMouseEnter = (date: Dayjs) => {
			const [ from ] = selectedRange.value;
			if (!from) return;
			const disabledRange = getDateRange(from, date)
				.filter(isDisabled);
			const firstAvailable = date.isAfter(from)
				? dayjs.min(disabledRange)?.subtract(1, 'day')
				: dayjs.max(disabledRange)?.add(1, 'day');
			setHoveredDate(firstAvailable || date);
		};

		return {
			weekDays,
			hoveredDate,
			monthTitle,
			daysInMonth,
			isButtonDisabled,
			dayClass,
			onMouseEnter,
			nextMonth,
			prevMonth,
			selectDate,
		};
	}
;
