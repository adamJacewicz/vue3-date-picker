import { computed, ref }                                            from 'vue';
import dayjs, { Dayjs }                                             from 'dayjs';
import isSameOrAfter                                                from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore                                               from 'dayjs/plugin/isSameOrBefore';
import minMax                                                       from 'dayjs/plugin/minMax';
import localeData                                                   from 'dayjs/plugin/localeData';
import weekday                                                      from 'dayjs/plugin/weekday';
import isBetween                                                    from 'dayjs/plugin/isBetween';
import updateLocale                                                 from 'dayjs/plugin/updateLocale';
import { isEndOfMonth, isEndOfWeek, isStartOfMonth, isStartOfWeek } from '@/utils';

dayjs.extend(minMax);
dayjs.extend(localeData);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);
dayjs.extend(weekday);
dayjs.extend(updateLocale);
dayjs.updateLocale('en', {
  weekStart: 1,
});
export const useDateRange = (props: any, context: any) => {
  const isDisabled = (value: Dayjs) => props.disabled(value.toDate());

  const setHoveredDate = (value: Dayjs) => hoveredDate.value = value;

  const setRange = (value: Dayjs[]) => {
    context.emit('update:modelValue', value);
  };

  const selectedRange = computed<Dayjs[]>({
    get: () => props.modelValue.map((date: Date) => date && dayjs(date)),
    set: setRange,
  });

  const hoveredDate = ref<Dayjs | null>(selectedRange.value[ 1 ] || null);

  const isRange = (date: Dayjs) => {
    const [ from, to ] = selectedRange.value;
    const hovered = hoveredDate.value;
    return from && hovered
      && date.isBetween(from, to || hovered)
      || isSelected(date);
  };

  const isSelected = (date: Dayjs) => {
    const [ from, to ] = selectedRange.value;
    const hovered = hoveredDate.value;
    return from && hovered
      && (date.isSame(from, 'day') || date.isSame(to || hovered, 'day'));
  };

  const isStart = (date: Dayjs) => {
    const [ from, to ] = selectedRange.value;
    const hovered = hoveredDate.value;
    return from && hovered && isSelected(date)
      && date.isSameOrBefore(from, 'day')
      && date.isSameOrBefore(to || hovered, 'day');
  };

  const isEnd = (date: Dayjs) => {
    const [ from, to ] = selectedRange.value;
    const hovered = hoveredDate.value;
    return from && hovered && isSelected(date)
      && date.isSameOrAfter(from, 'day')
      && date.isSameOrAfter(to || hovered, 'day');
  };

  const getDayClass = (date: Dayjs) => ({
    'disabled': isDisabled(date),
    'range': isRange(date),
    'start': isStart(date),
    'end': isEnd(date),
    'range--rounded-right': isEndOfMonth(date) || isEndOfWeek(date),
    'range--rounded-left': isStartOfMonth(date) || isStartOfWeek(date),
  });


  return {
    selectedRange,
    hoveredDate: computed(() => hoveredDate.value),
    getDayClass,
    isDisabled,
    setHoveredDate,
    setRange,
  };
};
